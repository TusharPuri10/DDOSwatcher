import { Box, Button, Grid } from "@mui/material";
import React, { useState, useEffect } from "react";
import axios from "axios";
import illustration from "../../assets/illustration.png";
import OpenInNewIcon from '@mui/icons-material/OpenInNew';

const Home = () => {
    return (
        <Box sx={{ margin: 0, padding: 0, display:"flex", flexDirection:"row", justifyContent:'space-between',}}>
            <Box sx={{width: "50%"}}>
                <div
                style={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    justifyContent: 'space-between',
                    backgroundColor: '#b7e4c7',
                    height: '60vh',
                }}
                >
                <div style={{ flex: '1', padding: '0 8px' }}>
                    <div
                    style={{
                        textAlign: 'center',
                        maxWidth: '780px',
                        margin: '0 auto',
                    }}
                    >
                    <h1
                        style={{
                        marginBottom: '8px',
                        fontSize: '24px',
                        fontWeight: 'bold',
                        color: '#000',
                        }}
                    >
                        Do You Want to Empower Your Brand and Get More Traffic?
                    </h1>
                    <p
                        style={{
                        maxWidth: '600px',
                        marginBottom: '10px',
                        fontSize: '16px',
                        color: '#707070',
                        }}
                    >
                        Quality Never Happens by Accident. It’s always the outcome of deliberate effort. We produce a remarkably rich online experience. Our growth strategies will spark your brand’s and business’s traffic and revenue.
                    </p>
                    <Button 
                        variant="contained"
                        size="large" 
                        sx={{ color:"#fff", marginTop:"100px", bgcolor:"#081c15" }} 
                        // onClick={()=>()}
                    >
                        <text sx={{fontWeight:"bold"}}>Analyse Now</text>
                        <OpenInNewIcon sx={{marginX:"7px",color:"#fff" }}/>
                    </Button>
                    </div>
                </div>
                </div>
            </Box>
            <Box sx={{ width:'50%', display:'flex', justifyContent:'center', alignItems:"center", bgcolor: "#081c15"}}>
                <img src={illustration} />
            </Box>
        </Box>
    );
};



export default Home;