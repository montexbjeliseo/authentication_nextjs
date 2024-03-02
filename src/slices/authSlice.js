import { createSlice } from "@reduxjs/toolkit";

export const authSlice = createSlice({
    name: 'auth',
    initialState: {
        authState: false,
        token: null
    },
    reducers: {
        setAuthState: (state, action) => {
            state.authState = action.payload
        },
        setToken: (state, action) => {
            state.token = action.payload
        }
    }
});

export const { setAuthState, setToken } = authSlice.actions;
export default authSlice.reducer;