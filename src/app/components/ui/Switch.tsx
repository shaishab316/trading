/* eslint-disable react-hooks/exhaustive-deps, @typescript-eslint/no-unused-vars */
import { useEffect, useState } from 'react';

export default function Switch({
	openStyle = '',
	closeStyle = '',
	className = '',
	onToggle = (_value: boolean) => {},
	init = false,
}) {
	const [open, setOpen] = useState(init);
	const [hovered, setHovered] = useState(false);

	useEffect(() => {
		onToggle(open);
	}, [open]);

	useEffect(() => {
		if (!hovered) return;

		const handleKeyDown = (e: KeyboardEvent) => {
			if (e.key === ' ' || e.key === 'Spacebar' || e.key === 'Enter') {
				e.preventDefault();
				setOpen(!open);
			}
		};

		window.addEventListener('keydown', handleKeyDown);

		return () => window.removeEventListener('keydown', handleKeyDown);
	}, [hovered, open]);

	return (
		<button
			className={`bg-[#0f616d] hover:bg-[#074650] focus-visible:bg-[#074650] outline-0 group rounded-full w-10 h-5 relative transition-colors duration-200 ${className}`}
			onClick={(e) => {
				e.stopPropagation();
				setOpen(!open);
			}}
			onMouseEnter={() => setHovered(true)}
			onMouseLeave={() => setHovered(false)}
			aria-checked={open}
			role='switch'
			tabIndex={0}
			type='button'
			title='Press space to toggle'
		>
			<div
				className={`w-5 h-5 group-hover:scale-110 group-focus-visible:scale-110 absolute top-0 rounded-full transition-all duration-200 ${
					open
						? 'right-0 bg-gradient-to-b from-[#F9DF7B] to-[#B57E10] ' +
						  openStyle
						: 'left-0 bg-gray-400 ' + closeStyle
				}`}
			/>
		</button>
	);
}
