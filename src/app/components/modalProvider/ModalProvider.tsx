import type { ReactNode } from 'react';
import { useAppDispatch, useAppSelector } from '../../../hooks/redux';
import Login from '../auth/login';
import Extension from '../extension/Extension';
import Modal from '../ui/Modal';
import Journal from '../journal/Journal';
import { closeModal } from '../../../redux/features/modal/modalSlice';

const modals: Record<string, ReactNode> = {
	Extension: <Extension />,
	Login: <Login />,
	Journal: <Journal />,
};

export default function ModalProvider() {
	const openedModal = useAppSelector((state) => state.modal.openedModal);
	const dispatch = useAppDispatch();

	return (
		<Modal open={!!openedModal} setOpen={() => dispatch(closeModal())}>
			{modals[openedModal as string]}
		</Modal>
	);
}
