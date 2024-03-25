import { Link as RouterLink } from "react-router-dom"
import { Button, Grid, Link, TextField, Typography } from '@mui/material'
import { Google } from '@mui/icons-material'

export const LoginPage = () => {
    return (
        <Grid 
            container
            spacing={0}
            direction={"column"}
            alignItems={"center"}
            justifyContent={"center"}
            sx={{
                minHeight: "100vh",
                backgroundColor: "primary.main",
                pt: 4
            }}
        >
            <Grid 
                item
                className="box-shadow"
                xs={3}
                sx={{
                    padding: 3,
                    borderRadius: 2,
                    backgroundColor: "white"
                }}
            >
                <Typography variant="h5" sx={{mb: 1}}>
                    Login
                </Typography>

                <form>
                    <Grid container>
                        <Grid item xs={12} sx={{mt: 2}}>
                            <TextField 
                                label="Correo" 
                                type="email" 
                                placeholder="correo@google.com" 
                                fullWidth 
                            />
                        </Grid>

                        <Grid item xs={12} sx={{mt: 2}}>
                            <TextField 
                                label="Password" 
                                type="password" 
                                placeholder="Password" 
                                fullWidth 
                            />
                        </Grid>

                        <Grid container spacing={2} sx={{mb: 2, mt: 1}}>
                            <Grid item xs={12} sm={6}>
                                <Button variant="contained" color="primary" fullWidth>
                                    Login
                                </Button>
                            </Grid>

                            <Grid item xs={12} sm={6}>
                                <Button variant="contained" color="primary" fullWidth>
                                    <Google />
                                    <Typography sx={{ml: 1}}>Google</Typography>
                                </Button>
                            </Grid>
                        </Grid>

                        <Grid container direction={"row"} justifyContent={"end"}>
                            <Link component={RouterLink} color={'inherit'} to="/auth/register">
                                Crear una cuenta
                            </Link>
                        </Grid>
                    </Grid>
                </form>
            </Grid>
        </Grid>
    )
}
