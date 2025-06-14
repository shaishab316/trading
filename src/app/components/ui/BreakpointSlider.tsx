/* eslint-disable react-hooks/exhaustive-deps, @typescript-eslint/no-unused-vars */
import { useEffect, useState } from "react";

function BreakpointSlider({
	onChange = (_value) => {},
	step = 10,
	init = 5,
}: {
	onChange?: (value: number) => void;
	step?: number;
	init?: number;
}) {
	const [index, setIndex] = useState(init ?? 0);

	useEffect(() => {
		onChange(index);
	}, [index]);

	return (
		<div className="w-full relative ">
			<input
				type="range"
				min={0}
				max={step}
				step={1}
				value={index}
				onChange={(e) => setIndex(+e.target.valueAsNumber)}
				className="w-full h-1 rounded-lg appearance-none hide-range"
				style={{
					background: `linear-gradient(
            to right,
            #10b981 0%,
            #10b981 ${(index / step) * 100}%,
            #d1d5db ${(index / step) * 100}%,
            #d1d5db 100%
          )`,
				}}
			/>
			{Array(step + 1)
				.fill(null)
				.map((_, i) => (
					<button
						type="button"
						key={i}
						className={`inline-block absolute w-4 h-4 top-2 rotate-45 rounded-sm ${
							i <= index ? "bg-[#2ecc71]" : "bg-gray-400"
						}`}
						style={{
							left: `${(i / step) * 98}%`,
						}}
						onClick={() => setIndex(i)}
					></button>
				))}
		</div>
	);
}

export default BreakpointSlider;
