/* eslint-disable @typescript-eslint/no-unused-vars, react-hooks/exhaustive-deps */
import { useEffect, useState, type ReactNode } from "react";
import { MdDone } from "react-icons/md";

export default function Checkbox({
	onCheckedChange = (_value: boolean) => {},
	init = false,
	checkedElement = <MdDone className="bg-[#6fafe7] w-full h-full" />,
	children = null,
}: {
	onCheckedChange?: (value: boolean) => void;
	init?: boolean;
	children?: ReactNode;
	checkedElement?: ReactNode;
}) {
	const [checked, setChecked] = useState(init);

	useEffect(() => {
		onCheckedChange(checked);
	}, [checked]);

	return (
		<div
			onClick={() => setChecked(!checked)}
			className="flex items-center gap-2 group cursor-pointer select-none"
			title={checked ? "Click to Uncheck" : "Click to Check"}
		>
			<div
				className={`w-5 h-5 border ${
					checked ? "border-[#6fafe7]" : ""
				} click-group overflow-hidden rounded-lg grid place-items-center`}
			>
				{checked && checkedElement}
			</div>
			{children}
		</div>
	);
}
