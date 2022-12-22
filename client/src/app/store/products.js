import { createAction, createSlice } from "@reduxjs/toolkit";
import isOutdated from "../utils/isOutdated";
import productService from "../services/product.service";
import history from "../utils/history";

const productsSlice = createSlice({
    name: "products",
    initialState: {
        entities: [],
        filtered_products: [],
        isLoading: true,
        error: null,
        lastFetch: null,
        filters: {
            text: "",
            category: "all",
            model: "all"
        }
    },
    reducers: {
        productsRequested: (state) => {
            state.isLoading = true;
        },
        productsReceived: (state, action) => {
            state.entities = action.payload;
            state.lastFetch = Date.now();
            state.isLoading = false;
        },
        productsRequestFiled: (state, action) => {
            state.error = action.payload;
            state.isLoading = false;
        },
        productUpdateSuccessed: (state, action) => {
            state.entities[
                state.entities.findIndex((p) => p._id === action.payload._id)
                ] = action.payload;
        },
        productRemoved: (state, action) => {
            state.entities = state.entities.filter(
                (p) => p._id !== action.payload
            );
        },
        productCreated: (state, action) => {
            state.entities.push(action.payload);
        },
        filterProducts: (state, action) => {
            state.filters = action.payload;
            state.filtered_products = state.entities.filter((p) => {
                const { text, category } = state.filters;
                const textMatch = p.name.toLowerCase().includes(text.toLowerCase());
                const categoryMatch = category === "all" ? true : p.category === category;
                return textMatch && categoryMatch;
            });
        }
    }
});

const { reducer: productsReducer, actions } = productsSlice;
export const {
    productsRequested,
    productsReceived,
    productsRequestFiled,
    productUpdateSuccessed,
    productRemoved,
    productCreated,
    updateFilters,
    filterProducts
} = actions;

const productUpdateRequested = createAction("product/productUpdateRequested");
const removeProductRequested = createAction("product/removeProductRequested");
const createProductRequested = createAction("comments/createProductRequested");

export const loadProductsList = () => async (dispatch, getState) => {
    const { lastFetch } = getState().product;
    if (isOutdated(lastFetch)) {
        dispatch(productsRequested());
        try {
            const { content } = await productService.get();
            dispatch(productsReceived(content));
        } catch (error) {
            dispatch(productsRequestFiled(error.message));
        }
    }
};
export const getProducts = () => (state) => state.product.entities;
export const getSearchText = () => (state) => state.product.searchText;
export const getFilteredProducts = () => (state) => state.product.filtered_products;
export const getProductsLoadingStatus = () => (state) =>
    state.product.isLoading;
export const getCurrentProductData = (prodId) => (state) => {
    return state.product.entities
        ? state.product.entities.find((p) => p._id === prodId)
        : null;
};
export const getProductById = (prodId) => (state) => {
    if (state.product.entities) {
        return state.product.entities.find((p) => p._id === prodId);
    }
};

export const updateProduct = (payload) => async (dispatch) => {
    dispatch(productUpdateRequested());
    try {
        const { content } = await productService.update(payload);
        dispatch(productUpdateSuccessed(content));
        history.push(`/admin`);
    } catch (error) {
        dispatch(productsRequestFiled(error.message));
    }
};

export const removeProduct = (prodId) => async (dispatch) => {
    dispatch(removeProductRequested());
    try {
        const { content } = await productService.remove(prodId);
        if (!content) {
            dispatch(productRemoved(prodId));
        }
    } catch (error) {
        dispatch(productsRequestFiled(error.message));
    }
};

export const createProduct = (payload) => async (dispatch, getState) => {
    dispatch(createProductRequested());
    try {
        const { content } = await productService.create(payload);
        dispatch(productCreated(content));
        history.push(`/admin`);
    } catch (error) {
        dispatch(productsRequestFiled(error.message));
    }
};

export default productsReducer;
