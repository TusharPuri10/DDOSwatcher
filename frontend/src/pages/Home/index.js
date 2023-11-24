import { Box, Button, Grid } from "@mui/material";
import React, { useState, useEffect } from "react";
import axios from "axios";
import illustration from "../../assets/illustration.png";
import bgimg from "../../assets/ddos-attack.png";
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import { Link } from "react-router-dom";

const Home = () => {
    return (
        <Box sx={{ margin: 0, padding: 0, display:"flex", flexDirection:"row", justifyContent:'space-between',}}>
            <Box sx={{width: "50%"}}>
                <div
                style={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    justifyContent: 'center',
                    backgroundColor: '#b7e4c7',
                    height: '50vh',
                }}
                >
                <div style={{ flex: '1', padding: '0 8px' }}>
                    <div
                    style={{
                        textAlign: 'center',
                        maxWidth: '780px',
                        margin: '0 auto',
                        display:"flex",
                        justifyContent:"center",
                        flexDirection:"column",
                        alignItems:"center",
                    }}
                    >
                    <h1
                        style={{
                        marginBottom: '0px',
                        fontSize: '40px',
                        fontWeight: 'bold',
                        color: '#000',
                        fontFamily: 'sans-serif',
                        }}
                    >
                        DDoS Watcher
                    </h1>
                    <p
                        style={{
                        maxWidth: '600px',
                        marginBottom: '10px',
                        fontSize: '20px',
                        color: '#808080',
                        }}
                    >
                        The DDoS Watcher stands as a formidable shield against Distributed Denial of Service (DDoS) attacks, leveraging advanced machine learning algorithms for robust analysis. Each algorithm employed serves a distinct purpose, enhancing the application's ability to discern intricate patterns within the data.
                    </p>
                    </div>
                </div>
                </div>
            </Box>
            <Box sx={{ width:'50%', display:'flex', justifyContent:'center', alignItems:"center", bgcolor: "#081c15"}}>
                {/* <img src={bgimg} /> */}
                <img src={bgimg} style={{width: '100%', height: 'auto'}} />
            </Box>
        </Box>
    );
};



export default Home;