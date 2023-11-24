import { Link } from "react-router-dom";
import { Box, Typography, Button, useTheme } from "@mui/material";

const NotFound = () => {
    const theme = useTheme();

    return (
        <Box
            sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                height: "80vh",
                backgroundColor: theme.palette.background.default,
            }}
        >
            <Typography
                variant="h2"
                gutterBottom
                color={theme.palette.text.primary}
            >
                Oops! Page not found.
            </Typography>
            <Typography
                variant="body1"
                gutterBottom
                color={theme.palette.text.secondary}
            >
                The page you are looking for does not exist.
            </Typography>
            <Button
                variant="contained"
                color="primary"
                component={Link}
                to="/"
                sx={{ marginTop: theme.spacing(2) }}
            >
                Go back to homepage
            </Button>
        </Box>
    );
};

export default NotFound;
