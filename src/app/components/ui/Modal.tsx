import { type ReactNode } from 'react';
import toast from 'react-hot-toast';

export default function Modal({
	children,
	open,
	setOpen,
	canClose = true,
}: {
	children: ReactNode;
	open: boolean;
	setOpen: (value: boolean) => void;
	canClose?: boolean;
}) {
	return (
		open && (
			<div className='w-screen h-screen fixed top-0 left-0 z-[9999] grid place-items-center'>
				<div
					onClick={() =>
						canClose ? setOpen(false) : toast.error("Can't Close Modal")
					}
					className='w-full h-full bg-black/30 backdrop-blur-sm absolute top-0 left-0 cursor-pointer'
					title={canClose ? 'Close Modal' : "Can't Close Modal"}
				></div>
				<div className='z-[9999] resize-model hide-scroll'>{children}</div>
			</div>
		)
	);
}
