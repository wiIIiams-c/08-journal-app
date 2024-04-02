import { configureStore } from '@reduxjs/toolkit'
import { authSlice } from './auth'
import { journalSlice } from './journal'

export const store = configureStore({
    reducer: {
        // Add reducers here
        auth: authSlice.reducer,
        journal: journalSlice.reducer,
    },
})
