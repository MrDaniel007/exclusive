import { configureStore } from "@reduxjs/toolkit";
import categoryReducer from "./category/categorySlice"
import productReducer from "./product/productSlice"
import wishReducer from "./wish/wishSlice";
import cartReducer from "./cartS/cartSlice"

export const myStore = configureStore({
    reducer: {
        category: categoryReducer,
        product: productReducer,
        favorite: wishReducer,
        buy: cartReducer
    }
})