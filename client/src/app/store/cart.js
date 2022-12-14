import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    cartItems: []
};

export const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addToCart(state, action) {
            const item = action.payload;
            const productItem = state.cartItems.find(product => product.id === item.id);
            if (productItem) {
                productItem.quantity += 1;
            } else {
                state.cartItems = [item, ...state.cartItems];
            }
        },
        increaseValue(state, action) {
            const item = action.payload;
            const productItem = state.cartItems.find(product => product.id === item.id);
            if (productItem) {
                productItem.quantity += 1;
            }
        },
        decreaseValue(state, action) {
            const item = action.payload;
            const productItem = state.cartItems.find(product => product.id === item.id);
            if (productItem) {
                productItem.quantity -= 1;
                if (productItem.quantity === 0) {
                    state.cartItems = state.cartItems.filter(product => product.id !== item.id);
                }
            }
        },
        removeFromCart(state, action) {
            const item = action.payload;
            state.cartItems = state.cartItems.filter(product => product.id !== item.id);
        }
    }
});

export const { addToCart, increaseValue, decreaseValue, removeFromCart } = cartSlice.actions;

export default cartSlice.reducer;
