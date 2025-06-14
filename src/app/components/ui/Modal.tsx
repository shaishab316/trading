import { type ReactNode } from "react";

export default function Modal({
	children,
	open,
	setOpen,
}: {
	children: ReactNode;
	open: boolean;
	setOpen: (value: boolean) => void;
}) {
	return (
		open && (
			<div className="w-screen h-screen fixed top-0 left-0 z-10">
				<div
					onClick={() => setOpen(false)}
					className="w-full h-full bg-black/30"
				></div>
				<div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
					{children}
				</div>
			</div>
		)
	);
}
