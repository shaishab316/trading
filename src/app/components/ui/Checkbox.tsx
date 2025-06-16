/* eslint-disable @typescript-eslint/no-unused-vars, react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import { MdDone } from "react-icons/md";

export default function Checkbox({
	onChecked = (_value: boolean) => {},
	init = false,
}: {
	onChecked?: (value: boolean) => void;
	init?: boolean;
}) {
	const [checked, setChecked] = useState(init);

	useEffect(() => {
		onChecked(checked);
	}, [checked]);

	return checked ? (
		<button
			onClick={() => setChecked(false)}
			className="w-5 h-5 rounded-lg border bg-[#6fafe7] border-[#6fafe7]"
			type="button"
		>
			<MdDone />
		</button>
	) : (
		<button
			onClick={() => setChecked(true)}
			className="w-5 h-5 rounded-lg border border-[#6fafe7]"
			type="button"
		></button>
	);
}
