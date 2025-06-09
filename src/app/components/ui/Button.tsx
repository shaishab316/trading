/* eslint-disable @typescript-eslint/no-explicit-any */
import type { ReactNode } from "react";

export default function Button({
	children,
	className,
	...props
}: {
	children: ReactNode;
	className?: string;
	onClick?: () => void;
	[key: string]: any;
}) {
	return (
		<button
			className={`text-white text-base border border-[#6FAFE7] bg-[radial-gradient(circle,_transparent,_#6FAFE7)] hover:bg-[radial-gradient(circle,_#6FAFE7,_transparent)]  py-1 px-4 rounded-md ${className}`}
			{...props}
		>
			{children}
		</button>
	);
}
