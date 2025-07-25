/* eslint-disable react-hooks/exhaustive-deps, @typescript-eslint/no-unused-vars */
import { useEffect, useState } from 'react';

function BreakpointSlider({
	onChange = (_value) => {},
	step = 10,
	init = 5,
	hovered = false,
}: {
	onChange?: (value: number) => void;
	step?: number;
	init?: number;
	hovered?: boolean;
}) {
	const [index, setIndex] = useState(init ?? 0);

	useEffect(() => {
		onChange(index);
	}, [index]);

	useEffect(() => {
		if (!hovered) return;

		const handleKeyDown = ({ key }: KeyboardEvent) => {
			if (key >= '1' && key <= '9') {
				const num = parseInt(key);
				const maxNum = Math.min(9, step + 1);
				const newValue = Math.min(num - 1, maxNum - 1);
				setIndex(newValue);
			} else if (key === 'ArrowLeft') {
				setIndex((prev) => Math.max(0, prev - 1));
			} else if (key === 'ArrowRight') {
				setIndex((prev) => Math.min(step, prev + 1));
			}
		};

		window.addEventListener('keydown', handleKeyDown);

		return () => window.removeEventListener('keydown', handleKeyDown);
	}, [hovered, step]);

	return (
		<div
			aria-label='Breakpoint Slider'
			aria-valuenow={index}
			aria-valuemin={0}
			aria-valuemax={step}
			role='slider'
			tabIndex={0}
			className='w-full flex items-center relative focus-visible:outline-0'
		>
			<input
				type='range'
				min={0}
				max={step}
				step={1}
				value={index}
				onChange={(e) => setIndex(+e.target.valueAsNumber)}
				className='w-[calc(100%-32px)] absolute left-[16px] h-1 rounded-lg appearance-none hide-range focus-visible:outline-0'
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
			<div className='absolute flex items-center justify-between w-full focus-visible:outline-0'>
				{Array(step + 1)
					.fill(null)
					.map((_, i) => (
						<button
							type='button'
							key={i}
							className={`inline-block focus-visible:outline-0 hover:scale-125 hover:rotate-[225deg] focus-visible:scale-125 focus-visible:rotate-[225deg] transition-all duration-500 w-4 h-4 rotate-45 rounded-sm cursor-pointer ${
								i <= index ? 'bg-[#2ecc71]' : 'bg-gray-400'
							}`}
							onClick={() => setIndex(i)}
							aria-label={`Set to ${i}`}
						></button>
					))}
			</div>
		</div>
	);
}

export default BreakpointSlider;
