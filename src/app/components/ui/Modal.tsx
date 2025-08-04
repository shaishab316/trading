import { type ReactNode } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

export default function Modal({
	children,
	open,
	setOpen,
}: {
	children: ReactNode;
	open: boolean;
	setOpen: (value: boolean) => void;
}) {
	const location = useLocation();
	const navigate = useNavigate();

	return (
		open && (
			<div className='w-screen h-screen fixed top-0 left-0 z-[9999] grid place-items-center'>
				<div
					onClick={() => {
						if (location.pathname === '/settings') navigate(-1);

						setOpen(false);
					}}
					className='w-full h-full bg-black/30 backdrop-blur-sm absolute top-0 left-0 cursor-pointer'
					title={'Close Modal'}
				></div>
				<div className='z-[9999] resize-model hide-scroll'>{children}</div>
			</div>
		)
	);
}
