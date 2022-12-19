import commentsReducer from "./comments";
import usersReducer from "./users";
import productsReducer from "./products";
import cartReducer from "./cart";

const { combineReducers, configureStore } = require("@reduxjs/toolkit");

const rootReducer = combineReducers({
    users: usersReducer,
    comments: commentsReducer,
    product: productsReducer,
    cart: cartReducer
});

export function createStore() {
    return configureStore({
        reducer: rootReducer
    });
}
