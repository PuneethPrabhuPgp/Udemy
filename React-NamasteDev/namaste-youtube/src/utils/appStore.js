import { configureStore } from "@reduxjs/toolkit";
import appReducer from "./appSlice";
import searchReducer from "./searchSlice";

const appStore = configureStore({
	reducer: {
		app: appReducer,
		search: searchReducer,
	},
});

export default appStore;
