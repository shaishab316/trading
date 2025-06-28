import { configureStore } from "@reduxjs/toolkit";
import navigationReducer from "./features/navigation/navigationSlice";
import userReducer from "./features/user/userSlice";
import modalReducer from "./features/modal/modalSlice";

import {
	persistReducer,
	persistStore,
	FLUSH,
	REHYDRATE,
	PAUSE,
	PERSIST,
	PURGE,
	REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage";

const persistConfig = {
	key: "user",
	storage,
};

const persistUserReducer = persistReducer(persistConfig, userReducer);

export const appStore = configureStore({
	reducer: {
		navigation: navigationReducer,
		user: persistUserReducer,
		modal: modalReducer,
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
