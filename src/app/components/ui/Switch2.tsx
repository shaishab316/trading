/* eslint-disable @typescript-eslint/no-unused-vars */
export default function Switch2({
	openStyle = "",
	closeStyle = "",
	className = "",
	open = false,
	setOpen = (_value: boolean) => {},
}) {
	return (
		<button
			className={`bg-[#0f616d] rounded-full w-10 h-5 relative ${className}`}
			onClick={() => {
				setOpen(!open);
			}}
		>
			<div
				className={`w-5 h-5 absolute top-0 rounded-full ${
					open
						? "right-0 bg-gradient-to-b from-[#F9DF7B] to-[#B57E10] " +
						  openStyle
						: "left-0 bg-gray-400 " + closeStyle
				}`}
			></div>
		</button>
	);
}
