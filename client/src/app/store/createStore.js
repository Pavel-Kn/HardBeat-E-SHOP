import commentsReducer from "./comments";
import usersReducer from "./users";
import productsReducer from "./products";
import cartReducer from "./cart";
import categoriesReducer from "./categories";

const { combineReducers, configureStore } = require("@reduxjs/toolkit");

const rootReducer = combineReducers({
    users: usersReducer,
    comments: commentsReducer,
    product: productsReducer,
    cart: cartReducer,
    categories: categoriesReducer
});

export function createStore() {
    return configureStore({
        reducer: rootReducer
    });
}
