import controls from "../../app/data/controls.json";
import { BiBarChartAlt2 } from "react-icons/bi";
import Tab from "../components/ui/Tab";
import { BsGraphUpArrow, BsPinAngle } from "react-icons/bs";
import ToggleButton from "../components/ui/ToggleButton";
import { MdElectricBolt } from "react-icons/md";

const { d1, d2 } = controls;

export default function Controls() {
	return (
		<div>
			<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 my-4">
				{d1.map((item, idx) => (
					<div
						key={idx}
						className="flex justify-between items-center gap-2 border border-gray-700 relative rounded-md py-2 px-6"
					>
						<div className="flex flex-col">
							<p>{item.title}</p>
							<p className="text-[#D4AF37]">{item.des}</p>
						</div>
						{item.up && (
							<div className="flex gap-2 items-center">
								{item.up}
								<div className="w-0 h-0 border-l-[10px] border-r-[10px] border-b-[10px] border-l-transparent border-r-transparent border-b-green-500"></div>
							</div>
						)}
					</div>
				))}
			</div>

			<ToggleButton
				className="py-[3px] px-8 border-[#dab24a]"
				style={{ color: "#dab24a" }}
				init={false}
				onToggle={console.log}
			>
				<MdElectricBolt className="inline-block mr-2" /> Turbo Execute
			</ToggleButton>

			<div className="py-6 grid grid-cols-1 lg:grid-cols-2 gap-6">
				<div className="flex flex-col gap-6">
					<div className="p-6 border border-gray-500 rounded-md">
						<div className="flex flex-wrap gap-2 items-center justify-between">
							<div>{d2.bid_ask_heat.coin}</div>
							<div className="flex flex-wrap gap-3">
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
									onChange={console.log}
								/>
								<Tab
									data={["15m", "1h", "4h", "all"].map((v) => ({
										children: v,
										value: v,
									}))}
									onChange={console.log}
								/>
								<ToggleButton onToggle={console.log}>
									<BsPinAngle />
								</ToggleButton>
							</div>
						</div>
						<div className="my-4 flex gap-4 flex-wrap items-center">
							<span className="text-2xl">{d2.bid_ask_heat.value}</span>
							{d2.bid_ask_heat.up && (
								<div className="flex gap-2 items-center text-gray-400">
									{d2.bid_ask_heat.up}
									<div className="w-0 h-0 border-l-[10px] border-r-[10px] border-b-[10px] border-l-transparent border-r-transparent border-b-green-500"></div>
								</div>
							)}
							Bid ask heat
							{d2.bid_ask_heat.down && (
								<div className="flex gap-2 items-center text-gray-400">
									{d2.bid_ask_heat.down}
									<div className="w-0 h-0 border-l-[10px] border-r-[10px] border-t-[10px] border-l-transparent border-r-transparent border-t-red-500"></div>
								</div>
							)}
						</div>
						<img src="/tem/bar.png" className="w-full" alt="bar" />
						{/* Delete this img */}
					</div>

					<div className="p-6 border border-gray-500 rounded-md">
						<div className="flex flex-wrap gap-2 items-center justify-between">
							<div>{d2.yield_curve.coin}</div>
							<div className="flex flex-wrap gap-3">
								<Tab
									data={["15m", "1h", "4h", "all"].map((v) => ({
										children: v,
										value: v,
									}))}
									onChange={console.log}
								/>
								<ToggleButton onToggle={console.log}>
									<BsPinAngle />
								</ToggleButton>
							</div>
						</div>
						<div className="mt-4 flex gap-4 flex-wrap items-center">
							<span className="text-2xl">{d2.yield_curve.value}</span>
							{d2.yield_curve.up && (
								<div className="flex gap-2 items-center text-gray-400">
									{d2.yield_curve.up}
									<div className="w-0 h-0 border-l-[10px] border-r-[10px] border-b-[10px] border-l-transparent border-r-transparent border-b-green-500"></div>
								</div>
							)}
							Yield curve
						</div>
					</div>
				</div>

				<div className="flex flex-col gap-6">
					<div className="p-6 border border-gray-500 rounded-md">
						<div className="flex flex-wrap gap-2 items-center justify-between">
							<div>{d2.liquidity.coin}</div>
							<div className="flex flex-wrap gap-3">
								<Tab
									data={["15m", "1h", "4h", "all"].map((v) => ({
										children: v,
										value: v,
									}))}
									onChange={console.log}
								/>
								<ToggleButton onToggle={console.log}>
									<BsPinAngle />
								</ToggleButton>
							</div>
						</div>
						<div className="mt-4 flex gap-4 flex-wrap items-center">
							<span className="text-2xl">{d2.liquidity.value}</span>
							{d2.liquidity.up && (
								<div className="flex gap-2 items-center text-gray-400">
									{d2.liquidity.up}
									<div className="w-0 h-0 border-l-[10px] border-r-[10px] border-b-[10px] border-l-transparent border-r-transparent border-b-green-500"></div>
								</div>
							)}
							Liquidity
							{d2.liquidity.down && (
								<div className="flex gap-2 items-center text-gray-400">
									{d2.liquidity.down}
									<div className="w-0 h-0 border-l-[10px] border-r-[10px] border-t-[10px] border-l-transparent border-r-transparent border-t-red-500"></div>
								</div>
							)}
						</div>
					</div>

					<div className="p-6 border border-gray-500 rounded-md">
						<div className="flex flex-wrap gap-2 items-center justify-between">
							<div>{d2.vwap.coin}</div>
							<div className="flex flex-wrap gap-3">
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
									onChange={console.log}
								/>
								<Tab
									data={["15m", "1h", "4h", "all"].map((v) => ({
										children: v,
										value: v,
									}))}
									onChange={console.log}
								/>
								<ToggleButton onToggle={console.log}>
									<BsPinAngle />
								</ToggleButton>
							</div>
						</div>
						<div className="my-4 flex gap-4 flex-wrap items-center">
							<span className="text-2xl">{d2.vwap.value}</span>
							{d2.vwap.up && (
								<div className="flex gap-2 items-center text-gray-400">
									{d2.vwap.up}
									<div className="w-0 h-0 border-l-[10px] border-r-[10px] border-b-[10px] border-l-transparent border-r-transparent border-b-green-500"></div>
								</div>
							)}
							VWAP
						</div>
						<img src="/tem/bar.png" className="w-full" alt="bar" />
						{/* Delete this img */}
					</div>
				</div>
			</div>
		</div>
	);
}
