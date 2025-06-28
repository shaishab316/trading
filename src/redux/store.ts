import { configureStore } from "@reduxjs/toolkit";
import navigationReducer from "./features/navigation/navigationSlice";
import userReducer from "./features/user/userSlice";
import modalReducer from "./features/modal/modalSlice";
import configReducer from "./features/config/configSlice";

import {
	persistStore,
	FLUSH,
	REHYDRATE,
	PAUSE,
	PERSIST,
	PURGE,
	REGISTER,
} from "redux-persist";

export const appStore = configureStore({
	reducer: {
		navigation: navigationReducer,
		user: userReducer,
		modal: modalReducer,
		config: configReducer,
	},
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware({
			serializableCheck: {
				ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
			},
		}),
});

export type RootState = ReturnType<typeof appStore.getState>;
export type AppDispatch = typeof appStore.dispatch;
export const persistor = persistStore(appStore);
