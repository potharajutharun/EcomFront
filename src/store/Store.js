import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./cartSlice";
import productSlice from "./productSlice";
import wishlistSlice from "./wishlistSlice";
import authSlice from "./authSlice";
const store=configureStore({
    reducer:{
        cart:cartSlice,
        products:productSlice,
        WishList:wishlistSlice,
        auth:authSlice,

    }
})
export default store;