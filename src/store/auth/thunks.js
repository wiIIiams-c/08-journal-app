import { loginWithEmailPassword, logoutFirebase, registerUserWithEmailPassword, signInWithGoogle } from '../../firebase/providers'
import { checkAuth, login, logout } from './'

export const checkingAuth = (email, password) => {
    return async (dispatch) => {
        dispatch(checkAuth())
        /* try {
            const user = await auth.signInWithEmailAndPassword(email, password)
            dispatch(login(user))
        } catch (error) {
            dispatch(logout())
            console.log(error)
        } */
    }
}

export const startGoogleLogin = () => {
    return async (dispatch) => {
        dispatch(checkAuth())

        const result = await signInWithGoogle()
        
        if(!result.ok) return dispatch(logout(result.errorMessage))

        dispatch(login(result))
    }
}

export const startCreatingUserWithEmailPassword = ({email, password, displayName}) => {
    return async (dispatch) => {
        dispatch(checkAuth())

        const result = await registerUserWithEmailPassword({email, password, displayName})
        
        if(!result.ok) return dispatch(logout(result))

        dispatch(login(result))
    }
}

export const startLoginWithEmailPassword = ({email, password}) => {
    return async (dispatch) => {
        dispatch(checkAuth())

        const result = await loginWithEmailPassword({email, password})

        if(!result.ok) return dispatch(logout(result))

        dispatch(login(result))
    }
}

export const startLogout = () => {
    return async(dispatch) => {
        await logoutFirebase()

        dispatch(logout())
    }
}