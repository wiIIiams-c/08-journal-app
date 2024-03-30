import { configureStore } from '@reduxjs/toolkit'
import { authSlice } from './auth'

export const store = configureStore({
    reducer: {
        // Add reducers here
        auth: authSlice.reducer,
    },
})
