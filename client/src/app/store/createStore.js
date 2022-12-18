import commentsReducer from "./comments";
import usersReducer from "./users";
import productsReducer from "./products";

const { combineReducers, configureStore } = require("@reduxjs/toolkit");

const rootReducer = combineReducers({
    users: usersReducer,
    comments: commentsReducer,
    product: productsReducer
});

export function createStore() {
    return configureStore({
        reducer: rootReducer
    });
}
