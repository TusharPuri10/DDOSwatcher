import csv
import signal
import asyncio
from collections import defaultdict
from scapy.sessions import DefaultSession
from .features.context.packet_direction import PacketDirection
from .features.context.packet_flow_key import get_packet_flow_key
from .flow import Flow

EXPIRED_UPDATE = 40
GARBAGE_COLLECT_PACKETS = 100


class FlowSession(DefaultSession):
    def __init__(self, *args, **kwargs):
        self.flows = {}
        self.csv_line = 0
        self.output_mode = kwargs.get("output_mode")
        self.output_file = kwargs.get("output_file")
        self.url_model = kwargs.get("url_model")
        self.packets_count = 0
        self.clumped_flows_per_label = defaultdict(list)
        signal.signal(signal.SIGINT, self.handle_interrupt)  # Register a signal handler for interrupt (Ctrl+C)

        if self.output_mode == "flow":
            self.output = open(self.output_file, "w", newline="")
            self.csv_writer = csv.writer(self.output)
            self.csv_writer.writerow(["timestamp", "other_field", ...])  # Add necessary header fields

        super(FlowSession, self).__init__(*args, **kwargs)

    async def garbage_collect(self, latest_time) -> None:
        if not self.url_model:
            print("Garbage Collection Began. Flows = {}".format(len(self.flows)))

        keys = list(self.flows.keys())
        tasks = []

        for k in keys:
            flow = self.flows.get(k)

            if (
                latest_time is None
                or latest_time - flow.latest_timestamp > EXPIRED_UPDATE
                or flow.duration > 90
            ):
                data = flow.get_data()

                if self.csv_line == 0:
                    self.csv_writer.writerow(data.keys())

                self.csv_writer.writerow(data.values())
                self.csv_line += 1

                tasks.append(self.async_del_flow(k))

        await asyncio.gather(*tasks)

        if not self.url_model:
            print("Garbage Collection Finished. Flows = {}".format(len(self.flows)))

    async def async_del_flow(self, k):
        del self.flows[k]

    def on_packet_received(self, packet):
        count = 0
        direction = PacketDirection.FORWARD

        if self.output_mode != "flow":
            if "TCP" not in packet:
                return
            elif "UDP" not in packet:
                return

        try:
            packet_flow_key = get_packet_flow_key(packet, direction)
            flow = self.flows.get((packet_flow_key, count))
        except Exception:
            return

        self.packets_count += 1

        if flow is None:
            direction = PacketDirection.REVERSE
            packet_flow_key = get_packet_flow_key(packet, direction)
            flow = self.flows.get((packet_flow_key, count))

        if flow is None:
            direction = PacketDirection.FORWARD
            flow = Flow(packet, direction)
            packet_flow_key = get_packet_flow_key(packet, direction)
            self.flows[(packet_flow_key, count)] = flow

        elif (packet.time - flow.latest_timestamp) > EXPIRED_UPDATE:
            expired = EXPIRED_UPDATE
            while (packet.time - flow.latest_timestamp) > expired:
                count += 1
                expired += EXPIRED_UPDATE
                flow = self.flows.get((packet_flow_key, count))

                if flow is None:
                    flow = Flow(packet, direction)
                    self.flows[(packet_flow_key, count)] = flow
                    break
        elif "F" in str(packet.flags):
            flow.add_packet(packet, direction)
            asyncio.run(self.garbage_collect(packet.time))
            return

        flow.add_packet(packet, direction)

        if not self.url_model:
            GARBAGE_COLLECT_PACKETS = 10000

        if (
            self.packets_count % GARBAGE_COLLECT_PACKETS == 0
            or (flow.duration > 120 and self.output_mode == "flow")
        ):
            asyncio.run(self.garbage_collect(packet.time))

    def get_flows(self) -> list:
        return self.flows.values()


def generate_session_class(output_mode, output_file, url_model):
    return type(
        "NewFlowSession",
        (FlowSession,),
        {
            "output_mode": output_mode,
            "output_file": output_file,
            "url_model": url_model,
        },
    )