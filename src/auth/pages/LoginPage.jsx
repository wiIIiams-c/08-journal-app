import { Link as RouterLink } from 'react-router-dom'
import { Alert, Button, Grid, Link, TextField, Typography } from '@mui/material'
import { Google } from '@mui/icons-material'
import { AuthLayout } from '../layout/AuthLayout'
import { useForm } from '../../hooks'
import { checkingAuth, startGoogleLogin, startLoginWithEmailPassword } from '../../store/auth'
import { useDispatch, useSelector } from 'react-redux'
import { useMemo } from 'react'

export const LoginPage = () => {
    const dispatch = useDispatch()
    const {status, errorMessage} = useSelector(state => state.auth)

    const {email, password, onInputChange} = useForm({
        email: '',
        password: ''
    })

    const isAuthenticated = useMemo(() => {
        status === 'authenticated'
    }, [status])

    const onSubmit = (event) => {
        event.preventDefault()
        dispatch(startLoginWithEmailPassword({email, password}))
        
        console.log({email, password})
    }

    const onGoogleLogin = () => {
        dispatch(startGoogleLogin())
    }

    return (
        <AuthLayout titulo="Login">
            <form onSubmit={onSubmit} className="animate__animated animate__fadeIn animate__faster">
                <Grid container>
                    <Grid item xs={12} sx={{mt: 2}}>
                        <TextField 
                            label="Correo" 
                            type="email" 
                            placeholder="correo@correo.com" 
                            fullWidth 
                            name="email"
                            value={email}
                            onChange={onInputChange}
                        />
                    </Grid>

                    <Grid item xs={12} sx={{mt: 2}}>
                        <TextField 
                            label="Password" 
                            type="password" 
                            placeholder="Password" 
                            fullWidth 
                            name="password"
                            value={password}
                            onChange={onInputChange}
                        />
                    </Grid>

                    <Grid container display={!!errorMessage? '' : 'none'} sx={{mt: 1}}>
                        <Grid item xs={12} display={!!errorMessage? '' : 'none'}>
                            <Alert severity="error">{errorMessage}</Alert>
                        </Grid>
                    </Grid>

                    <Grid container spacing={2} sx={{mb: 2, mt: 1}}>
                        <Grid item xs={12} sm={6}>
                            <Button type="submit" variant="contained" color="primary" fullWidth disabled={isAuthenticated}>
                                Login
                            </Button>
                        </Grid>

                        <Grid item xs={12} sm={6}>
                            <Button onClick={onGoogleLogin} variant="contained" color="primary" fullWidth disabled={isAuthenticated}>
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
        </AuthLayout>
    )
}
