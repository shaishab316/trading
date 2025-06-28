import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

const configSlice = createSlice({
	name: "config",
	initialState: {
		theme: "dark" as "dark" | "light",
		zoom: 0,
		brightness: 0,
	},
	reducers: {
		setTheme: (state, action: PayloadAction<"dark" | "light">) => {
			state.theme = action.payload;
		},
		setZoom: (state, action: PayloadAction<number>) => {
			state.zoom = action.payload;
		},
		setBrightness: (state, action: PayloadAction<number>) => {
			state.brightness = action.payload;
		},
	},
});

export const { setTheme, setZoom, setBrightness } = configSlice.actions;
export default persistReducer(
	{
		key: "config",
		storage,
	},
	configSlice.reducer
);
