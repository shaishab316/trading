import { BiBarChartAlt2 } from "react-icons/bi";
import Tab from "../ui/Tab";
import { BsGraphUpArrow, BsPinAngle } from "react-icons/bs";
import CandleChart from "../ui/CandleChart";
import { useEffect, useState } from "react";
import ToggleButton from "../ui/ToggleButton";
import random from "../../../utils/random";
import BarChart from "../ui/BarChart";

export default function GraphCard({
	data,
	option,
}: {
	data: {
		coin?: string;
		volume?: {
			name?: string;
			value?: string;
		};
		up?: string;
		down?: string;
	};
	option?: {
		pin?: boolean;
		showFull?: boolean;
	};
}) {
	const [view, setView] = useState("graph");
	const [showFull, setShowFull] = useState<boolean>(option?.showFull ?? true);
	const [pin, setPin] = useState(false);
	const [hover, setHover] = useState(false);

	const [cartData, setCartData] = useState(
		Array.from({ length: 20 }).map((_, i) => {
			const date = new Date(2025, 5, 16, i + 1);
			const high = random(10_000, 1_000_000) | 0;
			const low = random(10_000, 1_000_000) | 0;
			const open = random(low, high) | 0;
			const close = random(low, high) | 0;
			return [date.getTime(), open, high, low, close];
		})
	);
	const [barData, setBarData] = useState(
		Array.from({ length: 10 }).map(() => random(0, 500) | 0)
	);

	useEffect(() => {
		let interval: number | null = null;

		if (!hover)
			interval = setInterval(() => {
				setCartData(
					Array.from({ length: 20 }).map((_, i) => {
						const date = new Date(2025, 5, 16, i + 1);
						const high = random(10_000, 1_000_000) | 0;
						const low = random(10_000, 1_000_000) | 0;
						const open = random(low, high) | 0;
						const close = random(low, high) | 0;
						return [date.getTime(), open, high, low, close];
					})
				);

				setBarData(Array.from({ length: 10 }).map(() => random(0, 500) | 0));
			}, 2000);

		return () => clearInterval(interval!);
	}, [hover]);

	return (
		<div
			onClick={() => pin || setShowFull(!showFull)}
			title={showFull ? "Minimize" : "Maximize"}
			className={`p-6 border border-gray-500 rounded-md backdrop-blur-md bg-black/20 hover:bg-black/30 ${
				!pin && "cursor-pointer"
			} ${!showFull && "h-fit"}`}
		>
			<div className="flex flex-wrap gap-2 items-center justify-between">
				<div>{data?.coin}</div>
				<div
					className="flex flex-wrap gap-3"
					onClick={(e) => e.stopPropagation()}
				>
					{showFull && (
						<Tab
							data={[
								{
									children: <BiBarChartAlt2 />,
									value: "graph",
								},
								{
									children: <BsGraphUpArrow />,
									value: "bar",
								},
							]}
							onChange={setView}
						/>
					)}
					<Tab
						data={["15m", "1h", "4h", "all"].map((v) => ({
							children: v,
							value: v,
						}))}
						onChange={console.log}
					/>
					{option?.pin && (
						<ToggleButton onToggle={setPin}>
							<BsPinAngle />
						</ToggleButton>
					)}
				</div>
			</div>
			<div className="mt-4 flex gap-4 flex-wrap items-center">
				<span className="text-2xl">{data?.volume?.value}</span>
				{data?.up && (
					<div className="flex gap-2 items-center text-gray-400">
						{data?.up}
						<div className="w-0 h-0 border-l-[10px] border-r-[10px] border-b-[10px] border-l-transparent border-r-transparent border-b-green-500"></div>
					</div>
				)}
				{data?.volume?.name}
				{data?.down && (
					<div className="flex gap-2 items-center text-gray-400">
						{data.down}
						<div className="w-0 h-0 border-l-[10px] border-r-[10px] border-t-[10px] border-l-transparent border-r-transparent border-t-red-500"></div>
					</div>
				)}
			</div>
			<div
				onClick={(e) => e.stopPropagation()}
				onMouseEnter={() => setHover(true)}
				onMouseLeave={() => setHover(false)}
			>
				{showFull &&
					(view === "graph" ? (
						<CandleChart data={cartData} />
					) : (
						<BarChart data={barData} />
					))}
			</div>
		</div>
	);
}
