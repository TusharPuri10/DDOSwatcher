import React from "react";
import Avatar from "@mui/material/Avatar";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import { useTheme } from "@mui/material";

const User = () => {
    const theme = useTheme();
    return (
        <div sx={{ flexGrow: 1, padding: theme.spacing(2) }}>
            <Paper>
                <Grid container spacing={2} alignItems="center">
                    <Grid item>
                        <Avatar
                            className={{
                                width: theme.spacing(10),
                                height: theme.spacing(10),
                                margin: theme.spacing(1),
                            }}
                            src="https://example.com/avatar.png"
                            alt="Avatar"
                        />
                    </Grid>
                    <Grid item>
                        <Typography variant="h4">
                            First Name Last Name
                        </Typography>
                        <Typography variant="subtitle1">
                            Email: user@example.com
                        </Typography>
                        <Typography variant="subtitle1">
                            Phone: +1 (555) 123-4567
                        </Typography>
                    </Grid>
                </Grid>
            </Paper>
        </div>
    );
};

export default User;
