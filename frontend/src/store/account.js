import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    isLoggedIn: false,
    isInitialized: false,
    user: null,
};

const account = createSlice({
    name: "account",
    initialState,
    reducers: {
        handleRegister: (state, action) => {
            const user = action.payload.user;
            state.user = user;
        },
        handleLogin: (state, action) => {
            const user = action.payload.user;
            state.user = user;
            state.isInitialized = true;
            state.isLoggedIn = true;
        },
        handleLogout: (state, action) => {
            state.isInitialized = true;
            state.isLoggedIn = false;
            state.user = null;
        },
    },
});

export default account.reducer;

export const { handleRegister, handleLogin, handleLogout } = account.actions;
