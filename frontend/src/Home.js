import { Box } from "@mui/material";
import TabWindow from "./components/TabWindow";
import { useEffect } from "react";

const Home = () => {
    useEffect(() => {
        document.title = "Home";
    }, []);

    return (
        <Box sx={{ margin: 0, padding: 0 }}>
            <TabWindow />
        </Box>
    );
};

export default Home;
