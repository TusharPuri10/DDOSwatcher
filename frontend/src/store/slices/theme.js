import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    mode: "light",
};

const theme = createSlice({
    name: "theme",
    initialState,
    reducers: {
        setMode: (state, action) => {
            if (state.mode === "light") {
                state.mode = "dark";
            } else {
                state.mode = "light";
            }
        },
    },
});

export default theme.reducer;

export const { setMode } = theme.actions;
