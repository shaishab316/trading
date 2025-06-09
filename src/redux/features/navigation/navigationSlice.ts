import { createSlice } from "@reduxjs/toolkit";

const navigationSlice = createSlice({
	name: "navigation",
	initialState: {
		currentPath: "Dashboard",
	},
	reducers: {
		setCurrentPath: (state, { payload }) => {
			state.currentPath = payload.path;
		},
	},
});

export const { setCurrentPath } = navigationSlice.actions;
export default navigationSlice.reducer;
