import { useState } from "react"
import { useDispatch } from "react-redux"
import { Link as RouterLink } from "react-router-dom"
import { Button, Grid, Link, TextField, Typography } from '@mui/material'
import { AuthLayout } from "../layout/AuthLayout"
import { useForm } from "../../hooks"
import { startCreatingUserWithEmailPassword } from "../../store/auth"

const formData = {
    email: '',
    password: '',
    displayName: ''
}

const formValidation = {
    email: [(value) => value.includes('@'), 'El correo no es válido'],
    password: [(value) => value.length >= 6, 'La contraseña debe tener al menos 6 caracteres'],
    displayName: [(value) => value.length >= 3, 'El nombre es obligatorio']
}

export const RegisterPage = () => {
    const dispatch = useDispatch()
    const [formSubmitted, setFormSubmitted] = useState(false)

    const {
        displayName, 
        displayNameValid,
        email, 
        emailValid,
        password, 
        passwordValid,
        formState, 
        isFormValid,
        onInputChange
    } = useForm(formData, formValidation)

    const onSubmit = (event) => {
        event.preventDefault()
        setFormSubmitted(true)

        if(!isFormValid) return

        dispatch(startCreatingUserWithEmailPassword(formState))
    }

    return (
        <AuthLayout titulo="Register">
            <form onSubmit={onSubmit}>
                <Grid container>
                    <Grid item xs={12} sx={{mt: 2}}>
                        <TextField 
                            label="Nombre" 
                            type="text" 
                            placeholder="Tu nombre" 
                            fullWidth 
                            name="displayName"
                            value={displayName}
                            onChange={onInputChange}
                            error={!!displayNameValid && formSubmitted}
                            helperText={displayNameValid}
                        />
                    </Grid>

                    <Grid item xs={12} sx={{mt: 2}}>
                        <TextField 
                            label="Correo" 
                            type="email" 
                            placeholder="correo@correo.com" 
                            fullWidth 
                            name="email"
                            value={email}
                            onChange={onInputChange}
                            error={!!emailValid && formSubmitted}
                            helperText={emailValid}
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
                            error={!!passwordValid && formSubmitted}
                            helperText={passwordValid}
                        />
                    </Grid>

                    <Grid container spacing={2} sx={{mb: 2, mt: 1}}>
                        <Grid item xs={12}>
                            <Button variant="contained" color="primary" fullWidth type="submit">
                                Crear Cuenta
                            </Button>
                        </Grid>
                    </Grid>

                    <Grid container direction={"row"} justifyContent={"end"}>
                        <Typography sx={{mr: 1}}>Ya tienes cuenta?</Typography>
                        <Link component={RouterLink} color={'inherit'} to="/auth/login">
                            Ingresar
                        </Link>
                    </Grid>
                </Grid>
            </form>
        </AuthLayout>
    )
}
