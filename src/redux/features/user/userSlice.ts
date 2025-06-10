import { createSlice } from "@reduxjs/toolkit";

export type TUser = {
	id: number;
	name: string;
	email: string;
	avatar: string;
};

const demoUser: TUser = {
	id: 1,
	name: "John Doe",
	email: "UaR6U@example.com",
	avatar: "/tem/profile-pic.png",
};

const userSlice = createSlice({
	name: "user",
	initialState: {
		user: demoUser as TUser | null,
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
export default userSlice.reducer;
