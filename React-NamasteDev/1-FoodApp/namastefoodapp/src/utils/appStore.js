import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./reduxSlices/cartSlice";

const appStore = configureStore({
  // adding slices
  reducer: {
    cart: cartReducer,
    // userSlice
    //user : userReducer
  }
});

export default appStore;
