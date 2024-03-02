import { createSlice } from "@reduxjs/toolkit";

const appSlice = createSlice({
	name: "app",
	initialState: {
		isMenuOpenFlag: true,
	},
	reducers: {
		toogleMenu: (state, action) => {
			state.isMenuOpenFlag = !state.isMenuOpenFlag;
		},
		closeMenu: (state, action) => {
			state.isMenuOpenFlag = false;
		},
	},
});

export const { toogleMenu, closeMenu } = appSlice.actions;
export default appSlice.reducer;
