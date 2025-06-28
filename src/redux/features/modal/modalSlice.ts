import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { TModal } from "../../../types/modal";

const modalSlice = createSlice({
	name: "modal",
	initialState: {
		openedModal: null as TModal | null,
	},
	reducers: {
		openModal: (state, action: PayloadAction<TModal>) => {
			state.openedModal = action.payload;
		},
		closeModal: (state) => {
			state.openedModal = null;
		},
	},
});

export const { openModal, closeModal } = modalSlice.actions;
export default modalSlice.reducer;
