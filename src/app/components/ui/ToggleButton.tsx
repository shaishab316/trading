/* eslint-disable react-hooks/exhaustive-deps, @typescript-eslint/no-unused-vars, @typescript-eslint/no-explicit-any */
import { useEffect, useState, type ReactNode } from "react";

export default function ToggleButton({
	children,
	className = "",
	onToggle = (_value: boolean) => {},
	init = false,
	...props
}: {
	children: ReactNode;
	className?: string;
	onToggle: (value: boolean) => void;
	init?: boolean;
	[key: string]: any;
}) {
	const [active, setActive] = useState(init);

	useEffect(() => {
		onToggle(active);
	}, [active]);

	return (
		<button
			onClick={() => setActive(!active)}
			className={`text-white flex items-center text-base border ${
				active
					? "border-[#dab24a] bg-[radial-gradient(circle,_transparent,_#dab24a99)] hover:bg-[radial-gradient(circle,_#dab24a99,_transparent)]"
					: "border-[#176F79] bg-[radial-gradient(circle,_transparent,_#176F7999)] hover:bg-[radial-gradient(circle,_#176F7999,_transparent)]"
			} py-1 px-3 rounded-lg ${className}`}
			{...props}
		>
			{children}
		</button>
	);
}
