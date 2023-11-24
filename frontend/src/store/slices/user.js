import { createSlice } from "@reduxjs/toolkit";

// initial state
const initialState = {
    shippingDetails: null,
    paymentDetails: null,
};

const user = createSlice({
    name: "user",
    initialState,
    reducers: {
        setShippingDetails: (state, action) => {
            state.shippingDetails = action.payload.shippingDetails;
        },
        setPaymentDetails: (state, action) => {
            state.paymentDetails = action.payload.paymentDetails;
        },
    },
});

export default user.reducer;

export const { setShippingDetails, setPaymentDetails } = user.actions;
