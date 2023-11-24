import { createSlice } from "@reduxjs/toolkit";

// initial state
const initialState = {
    cartItems: [],
};

const cart = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addCartItems: (state, action) => {
            const product = action.payload.product;
            const cartItems = state.cartItems;
            const existingProduct = cartItems?.find(
                (item) => item.id === product.id
            );
            if (existingProduct) {
                existingProduct.quantity++;
            } else {
                cartItems.push({ ...product, quantity: 1 });
            }
            state.cartItems = cartItems;
        },
        removeCartItems: (state, action) => {
            const productId = action.payload.productId;
            const cartItems = state.cartItems;
            const existingProduct = cartItems.find(
                (item) => item.id === productId
            );
            if (existingProduct) {
                if (existingProduct.quantity > 1) {
                    existingProduct.quantity--;
                } else {
                    const index = cartItems.indexOf(existingProduct);
                    cartItems.splice(index, 1);
                }
            }
            state.cartItems = cartItems;
        },
    },
});

export default cart.reducer;

export const { addCartItems, removeCartItems } = cart.actions;
