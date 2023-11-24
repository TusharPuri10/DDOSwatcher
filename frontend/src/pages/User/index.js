import React from "react";
import Avatar from "@mui/material/Avatar";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import { useTheme } from "@mui/material";
import a from "../../assets/a.jpeg";
import t from "../../assets/t.jpeg";
import s from "../../assets/s.jpeg";
import v from "../../assets/v.jpeg";

const User = () => {
    const theme = useTheme();
    return (
        <div style={{margin: "15px", padding:"10px"}}>
            <div style={{display: "flex", flexDirection:'row', justifyContent:'space-between', alignItems:'center',width:"100%"}}>
                <Grid container spacing={2} alignItems="center" sx={{bgcolor:'#74c69d',margin:"5px",display:"flex",flexDirection:'column'}}>
                    <Grid item>
                        <Avatar
                            className={{
                                width: theme.spacing(20),
                                height: theme.spacing(20),
                                margin: theme.spacing(2),
                            }}
                            src={a}
                            alt="Avatar"
                        />
                    </Grid>
                    <Grid item>
                        <Typography variant="h6" align="center">
                            Akash Dogra
                        </Typography>
                        <Typography variant="subtitle1" align="center">
                            Email: akash.dogra@gmail.com
                        </Typography>
                    </Grid>
                </Grid>
                <Grid container spacing={2} alignItems="center" sx={{bgcolor:'#74c69d',margin:"5px",display:"flex",flexDirection:'column'}}>
                    <Grid item>
                        <Avatar
                            className={{
                                width: theme.spacing(10),
                                height: theme.spacing(10),
                                margin: theme.spacing(1),
                            }}
                            src={t}
                            alt="Tushar Puri"
                        />
                    </Grid>
                    <Grid item>
                        <Typography variant="h6" align="center">
                            Tushar Puri
                        </Typography>
                        <Typography variant="subtitle1" align="center">
                            Email: tushar.puri@gmail.com
                        </Typography>
                    </Grid>
                </Grid>
                <Grid container spacing={2} alignItems="center" sx={{bgcolor:'#74c69d',margin:"5px",display:"flex",flexDirection:'column'}}>
                    <Grid item>
                        <Avatar
                            className={{
                                width: theme.spacing(10),
                                height: theme.spacing(10),
                                margin: theme.spacing(1),
                            }}
                            src={s}
                            alt="Shubham Rana"
                        />
                    </Grid>
                    <Grid item>
                        <Typography variant="h6" align="center">
                            Shubham Rana
                        </Typography>
                        <Typography variant="subtitle1" align="center">
                            Email: shubha.rana@gmail.com
                        </Typography>
                    </Grid>
                </Grid>
                <Grid container spacing={2} alignItems="center" sx={{bgcolor:'#74c69d',margin:"5px",display:"flex",flexDirection:'column'}}>
                    <Grid item>
                        <Avatar
                            className={{
                                width: theme.spacing(10),
                                height: theme.spacing(10),
                                margin: theme.spacing(1),
                            }}
                            src={v}
                            alt="Vishwas Malik"
                        />
                    </Grid>
                    <Grid item>
                        <Typography variant="h6" align="center">
                            Vishwas Malik
                        </Typography>
                        <Typography variant="subtitle1" align="center">
                            Email: vishwas.malik@gmail.com
                        </Typography>
                    </Grid>
                </Grid>
            </div>
        </div>
    );
};

export default User;
