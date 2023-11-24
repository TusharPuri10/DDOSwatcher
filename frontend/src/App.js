import * as React from "react";
import { ThemeProvider } from "@mui/material/styles";
import { theme } from "./assets/theme";
import { useSelector } from "react-redux";
import Snackbar from "./utils/Snackbar";
import Routes from "./routes/Routes";
import { AuthProvider } from "./contexts/AuthContext";

const ColorModeContext = React.createContext({ toggleColorMode: () => {} });

const App = () => {
    const colorMode = useSelector((state) => state.theme.mode);

    return (
        <ColorModeContext.Provider value={colorMode}>
            <ThemeProvider theme={theme(colorMode)}>
                <AuthProvider>
                    <Routes />
                    <Snackbar />
                </AuthProvider>
            </ThemeProvider>
        </ColorModeContext.Provider>
    );
};

export default App;
