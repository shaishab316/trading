import { useState } from "react";

export default function Collapse({
	title = "",
	init = false,
	children,
	...props
}: {
	title?: string;
	init?: boolean;
	children: React.ReactNode;
	[key: string]: unknown;
}) {
	const [open, setOpen] = useState(init);

	return (
		<div className="flex flex-col justify-start">
			<button
				onClick={() => setOpen(!open)}
				title={(open ? "Close " : "Open ") + title}
				{...props}
			>
				{title}
				{open ? (
					<svg
						width="15"
						height="16"
						viewBox="0 0 15 16"
						fill="none"
						xmlns="http://www.w3.org/2000/svg"
						className="inline-block ml-2"
					>
						<path d="M7.5 4.5L0 12.5H15L7.5 4.5Z" fill="#C0C0C0" />
					</svg>
				) : (
					<svg
						width="15"
						height="16"
						viewBox="0 0 15 16"
						fill="none"
						xmlns="http://www.w3.org/2000/svg"
						className="inline-block ml-2"
					>
						<path d="M7.5 12.5L0 4.5H15L7.5 12.5Z" fill="#C0C0C0" />
					</svg>
				)}
			</button>
			{open && children}
		</div>
	);
}
