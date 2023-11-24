const pcap = require('pcap-parser');
const express = require('express');
const http = require('http');
const socketIo = require('socket.io');
const { exec } = require('child_process');

const app = express();
const server = http.createServer(app);
const io = socketIo(server);

// Load your machine learning model
// const mlModel = require('./your_ml_model');

const pcapParser = new pcap();

// Function to start tshark to capture live packets
function startTshark() {
  const tsharkCommand = 'tshark -i 1 -w capture.pcap';
  const tsharkProcess = exec(tsharkCommand);

  tsharkProcess.on('exit', (code, signal) => {
    console.log(`tshark process exited with code ${code} and signal ${signal}`);
  });

  return tsharkProcess;
}

// Start tshark to capture live packets
const tsharkProcess = startTshark();

pcapParser.on('packet', (packet) => {
  // Extract relevant information from the packet
  const packetData = extractPacketData(packet);

  // Use your machine learning model to classify the packet
  const isDDoS = mlModel.predict(packetData);

  // Send the result to the connected clients
  io.emit('ddosDetection', { packetData, isDDoS });
});

// Serve a simple web interface
app.get('/', (req, res) => {
  // res.sendFile(__dirname + '/index.html');
  res.send('Hello, this is the default!');
});

// Handle socket connections
io.on('connection', (socket) => {
  console.log('Client connected');
});

// Start the server
const PORT = 3000;
server.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});

// Function to extract relevant data from the packet (customize as needed)
function extractPacketData(packet) {
  // Implement logic to extract relevant data from the packet
  // Example: return packet.headers;
}

// Handle process exit to stop tshark when the Node.js script exits
process.on('exit', () => {
  if (tsharkProcess) {
    tsharkProcess.kill();
  }
});
