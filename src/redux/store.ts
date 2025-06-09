import { configureStore } from "@reduxjs/toolkit";
import navigationReducer from "./features/navigation/navigationSlice";
import userReducer from "./features/user/userSlice";

export const appStore = configureStore({
	reducer: {
		navigation: navigationReducer,
		user: userReducer,
	},
});

export type RootState = ReturnType<typeof appStore.getState>;
export type AppDispatch = typeof appStore.dispatch;
