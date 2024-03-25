import { createTheme } from '@mui/material'
import { cyan } from '@mui/material/colors'

export const purpleTheme = createTheme({
    palette: {
        primary: {
            main: cyan[500],
        },
        secondary: {
            main: '#19857b',
        },
        error: {
            main: '#f44336',
        }
    },
})