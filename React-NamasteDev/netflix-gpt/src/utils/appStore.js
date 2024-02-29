import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice";

const appStore = configureStore({
	reducer: {
		// slices
		user: userReducer,
	},
});

export default appStore;
