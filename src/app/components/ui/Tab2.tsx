import { useState, type ReactNode } from "react";

export default function Tab2({
	data,
	onChange = () => {},
	init = data[0].value,
}: {
	data: {
		children: ReactNode;
		value: string;
	}[];
	onChange: (value: string) => void;
	init?: string;
}) {
	const [active, setActive] = useState(init);

	return (
		<div className="bg-black/20 backdrop-blur-md rounded-lg flex flex-wrap">
			{data.map((d, i) => (
				<button
					type="button"
					key={i}
					onClick={() => {
						onChange(d.value);
						setActive(d.value);
					}}
					className={`${
						active === d.value ? "bg-[#2ecc71] rounded-full" : ""
					} text-sm px-14 py-2`}
				>
					{d.children}
				</button>
			))}
		</div>
	);
}
