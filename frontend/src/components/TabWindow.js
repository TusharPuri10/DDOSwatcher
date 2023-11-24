import React, { useState } from "react";
import { AppBar, Tabs, Tab, Box } from "@mui/material";
import Home from "../pages/Home";
import Analyse from "../pages/Analyse";
import About from "../pages/About";

const tabStyle = {
    minWidth: { sm: 160 },
};

const TabPanel = (props) => {
    const { value, index, children, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
        </div>
    );
};

export const previewNavTabsId = "preview-nav-tabs";

const TabWindow = () => {
    const [tabIndex, setTabIndex] = useState(0);
    const handleChange = (event, newTabIndex) => {
        setTabIndex(newTabIndex);
    };

    return (
        <Box>
            <AppBar
                position="static"
                id={previewNavTabsId}
                sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    flexDirection: "row",
                }}
            >
                <Tabs
                    value={tabIndex}
                    onChange={handleChange}
                    variant="scrollable"
                    textColor="inherit"
                    indicatorColor="secondary"
                    scrollButtons
                    aria-label="preview-window-tabs"
                    allowScrollButtonsMobile
                >
                    <Tab label="Home" value={0} sx={tabStyle} />
                    <Tab label="DDoS Analyser" value={1} sx={tabStyle} />
                    <Tab label="About" value={2} sx={tabStyle} />
                </Tabs>
            </AppBar>

            <Box>
                <TabPanel value={tabIndex} index={0}>
                    <Home />
                </TabPanel>
                <TabPanel value={tabIndex} index={1}>
                    <Analyse />
                </TabPanel>
                <TabPanel value={tabIndex} index={2}>
                    <About/>
                </TabPanel>
            </Box>
        </Box>
    );
};

export default TabWindow;
