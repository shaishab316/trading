import { createSlice } from "@reduxjs/toolkit";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import type { TUser } from "../../../types/user";

const demoUser: TUser = {
	id: 1,
	name: "John Doe",
	email: "UaR6U@example.com",
	avatar: "/tem/profile-pic.png",
};

const userSlice = createSlice({
	name: "user",
	initialState: {
		user: null as TUser | null,
	},
	reducers: {
		login: (state) => {
			state.user = demoUser;
		},

		logout: (state) => {
			state.user = null;
		},
	},
});

export const { login, logout } = userSlice.actions;

export default persistReducer(
	{
		key: "user",
		storage,
	},
	userSlice.reducer
);
