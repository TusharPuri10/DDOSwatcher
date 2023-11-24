import { createTheme } from "@mui/material/styles";

export const theme = (mode) =>
    createTheme({
        palette: {
            mode: mode,
            background: {
                default: mode === "dark" ? "#1b4332" : "#fff",
                paper: mode === "dark" ? "#081c15" : "#fff",
                contrast: mode === "dark" ? "#081c15" : "#40916c",
            },
            text: {
                primary: mode === "dark" ? "#fff" : "#212121",
                secondary:
                    mode === "dark" ? "rgba(255, 255, 255, 0.7)" : "#2f2f2f",
                disabled: "rgba(255, 255, 255, 0.5)",
            },
            primary: {
                main: "#40916c  ",
                light: "#74c69d",
                dark: "#40916c",
                contrastText: "#fff",
            },
            secondary: {
                main: "#ffea00",
                light: "#FFEE33",
                dark: "#B2A300",
                contrastText: "rgba(0, 0, 0, 0.87)",
            },
            error: {
                main: "#f44336",
                light: "#e57373",
                dark: "#d32f2f",
                contrastText: "#fff",
            },
            warning: {
                main: "#ffa726",
                light: "#ffb74d",
                dark: "#F57C00",
                contrastText: "rgba(0, 0, 0, 0.87)",
            },
            info: {
                main: "#29b6f6",
                light: "#4fc3f7",
                dark: "#0288d1",
                contrastText: "rgba(0, 0, 0, 0.87)",
            },
            success: {
                main: "#66bb6a",
                light: "#81c784",
                dark: "#388e3c",
                contrastText: "rgba(0, 0, 0, 0.87)",
            },
            grey: {
                grey50: "#fafafa",
                grey100: "#f5f5f5",
                grey200: "#eeeeee",
                grey300: "#e0e0e0",
                grey500: "#9e9e9e",
                grey600: "#757575",
                grey700: "#616161",
                grey900: "#212121",
            },
            divider: "rgba(255, 255, 255, 0.12)",
        },
        overrides: {
            MuiAppBar: {
                colorInherit: {
                    backgroundColor: "#689f38",
                    color: "#fff",
                },
            },
            MuiButton: {
                root: {
                    background:
                        "linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)",
                    border: 0,
                    borderRadius: 3,
                    boxShadow: "0 3px 5px 2px rgba(255, 105, 135, .3)",
                    color: "white",
                    height: 48,
                    padding: "0 30px",
                },
            },
        },
        props: {
            MuiAppBar: {
                color: "inherit",
            },
            MuiButtonBase: {
                disableRipple: true,
            },
            MuiList: {
                dense: true,
            },
            MuiMenuItem: {
                dense: true,
            },
            MuiTable: {
                size: "small",
            },
            MuiButton: {
                size: "small",
            },
            MuiButtonGroup: {
                size: "small",
            },
            MuiCheckbox: {
                size: "small",
            },
            MuiFab: {
                size: "small",
            },
            MuiFormControl: {
                margin: "dense",
                size: "small",
            },
            MuiFormHelperText: {
                margin: "dense",
            },
            MuiIconButton: {
                size: "small",
            },
            MuiInputBase: {
                margin: "dense",
            },
            MuiInputLabel: {
                margin: "dense",
            },
            MuiRadio: {
                size: "small",
            },
            MuiSwitch: {
                size: "small",
            },
            MuiTextField: {
                margin: "dense",
                size: "small",
            },
            MuiTooltip: {
                arrow: true,
            },
        },
        shape: {
            borderRadius: 4,
        },
        spacing: 8,
    });
