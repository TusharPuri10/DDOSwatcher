import React from 'react';
import { Box, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@mui/material";
import ReactApexChart from 'react-apexcharts';

class Analyse extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            series: [{
                data: [] // Initialize with empty data
            }],
            options: {
                chart: {
                    id: 'realtime',
                    height: 350,
                    type: 'line',
                    animations: {
                        enabled: true,
                        easing: 'linear',
                        dynamicAnimation: {
                            speed: 1000
                        }
                    },
                    toolbar: {
                        show: false
                    },
                    zoom: {
                        enabled: false
                    }
                },
                dataLabels: {
                    enabled: false
                },
                stroke: {
                    curve: 'smooth'
                },
                title: {
                    text: 'Dynamic Updating Chart',
                    align: 'left'
                },
                markers: {
                    size: 0
                },
                xaxis: {
                    type: 'datetime',
                    range: 10000,
                },
                yaxis: {
                    max: 100
                },
                legend: {
                    show: false
                },
            },
            dataTable: [] // Initialize with empty data
        };
    }

    componentDidMount() {
        this.updateChart();
    }

    getNewSeries = (lastDate, { min, max }) => {
        const x = lastDate + 10000;
        const y = Math.floor(Math.random() * (max - min + 1)) + min;

        return { x, y };
    }

    updateChart = () => {
        let lastDate = Date.now();

        window.setInterval(() => {
            const newData = this.getNewSeries(lastDate, {
                min: 10,
                max: 90
            });

            lastDate = newData.x;

            // Check if y-value exceeds 80 and change color if it does
            const newColor = newData.y > 80 ? '#FF0000' : '#0000FF';

            // Add data to dataTable if y-value exceeds 80
            const newDataTable = newData.y > 80 ? [...this.state.dataTable, newData] : this.state.dataTable;

            this.setState({
                series: [{
                    data: [...this.state.series[0].data, newData]
                }],
                options: {
                    ...this.state.options,
                    colors: [newColor]
                },
                dataTable: newDataTable
            });
        }, 1000)
    }

    render() {
        return (
            <Box sx={{ margin: 0, padding: 0, display: 'flex', flexDirection:'column' }}>
                <div id="chart">
                    <ReactApexChart options={this.state.options} series={this.state.series} type="line" height={350} />
                </div>
                <TableContainer style={{ maxHeight: 450, overflow: 'auto' }}>
                    <Table>
                        <TableHead>
                            <TableRow>
                                <TableCell>X</TableCell>
                                <TableCell>Y</TableCell>
                                <TableCell>Tooltip</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {this.state.dataTable.map((row, index) => (
                                <TableRow key={index}>
                                    <TableCell>{new Date(row.x).toLocaleString()}</TableCell>
                                    <TableCell>{row.y}</TableCell>
                                    <TableCell>{row.tooltip ? `X: ${new Date(row.tooltip.x).toLocaleString()}, Y: ${row.tooltip.y}` : ''}</TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            </Box>
        );
    }
}

export default Analyse;