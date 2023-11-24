import React from "react";
import { Typography, Button, Box } from "@mui/material";
import { useTheme } from "@mui/material";
import { GitHub } from "@mui/icons-material";

export default function Footer() {
    const theme = useTheme();
    const year = new Date().getFullYear();

    return (
        <footer
            style={{
                backgroundColor: theme.palette.background.contrast,
                padding: theme.spacing(6),
            }}
        >
            <Typography variant="h6" align="center" gutterBottom color="white">
                DDoS WATCHER
            </Typography>

            <Box display="flex" justifyContent="center" m={1} p={1}>
                <Button
                    variant="outlined"
                    sx={{
                        backgroundColor:
                            theme.palette.mode === "dark"
                                ? theme.palette.background.contrast
                                : theme.palette.primary.main,
                        color: "white",
                        borderColor: "white",
                        ":hover": {
                            color:
                                theme.palette.mode === "dark"
                                    ? theme.palette.background.contrast
                                    : theme.palette.primary.main,
                            backgroundColor: "white",
                        },
                    }}
                    href="https://github.com/TusharPuri10/DDOSwatcher"
                    target="_blank"
                    rel="noopener"
                    startIcon={<GitHub />}
                >
                    Github Link
                </Button>
            </Box>
            <Typography
                variant="subtitle1"
                align="center"
                color="white"
                component="p"
            >
                All Rights Reserved © {year}
            </Typography>
        </footer>
    );
}
