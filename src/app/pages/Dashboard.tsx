import dashboard from "../../app/data/dashboard.json";
import { RiBarChart2Fill } from "react-icons/ri";
import { ImPower } from "react-icons/im";
import { DiBitbucket } from "react-icons/di";
import { CiGlobe } from "react-icons/ci";
import { BsGraphUpArrow } from "react-icons/bs";
import { BiBarChartAlt2 } from "react-icons/bi";
import Tab from "../components/ui/Tab";
import Switch from "../components/ui/Switch";
import { useEffect } from "react";

const { d1, d2, d3 } = dashboard;

export default function Dashboard() {
	useEffect(() => console.log("reloaded"), []);

	return (
		<div className="">
			<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 my-4">
				{d1.map((item, idx) => (
					<div
						key={idx}
						className="flex justify-between items-center gap-2 border border-gray-700 relative rounded-md py-2 px-6 backdrop-blur-md bg-black/20"
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

			<div className="border border-gray-600 p-2 rounded-md flex flex-wrap gap-4 justify-between items-center backdrop-blur-md bg-black/20">
				<div className="flex flex-wrap gap-4">
					{d2.map((item, idx) => (
						<div
							key={idx}
							className="flex justify-between items-center gap-2 border border-gray-700 relative rounded-md p-2 bg-black"
						>
							<div className="text-green-500 text-2xl">
								{[<RiBarChart2Fill />, <ImPower />, <DiBitbucket />][idx]}
							</div>
							<div className="flex gap-6">
								<p>{item.title}</p>
								{item.up && (
									<div className="flex gap-2 items-center">
										{item.up}
										<div className="w-0 h-0 border-l-[10px] border-r-[10px] border-b-[10px] border-l-transparent border-r-transparent border-b-green-500"></div>
									</div>
								)}
								{item.down && (
									<div className="flex gap-2 items-center">
										{item.down}
										<div className="w-0 h-0 border-l-[10px] border-r-[10px] border-t-[10px] border-l-transparent border-r-transparent border-t-red-500"></div>
									</div>
								)}
							</div>
						</div>
					))}
				</div>
				<div className="bg-[#00FFFF] border border-blue-600 py-2 px-4 text-black rounded-md flex items-center">
					<CiGlobe className="text-2xl" />
					<span className="ml-1 mr-3 whitespace-nowrap">Extension Mode</span>
					<Switch onToggle={console.log} className="bg-gray-300" />
				</div>
			</div>

			<div className="py-6 grid grid-cols-1 lg:grid-cols-2 gap-6">
				<div className="flex flex-col gap-6">
					<div className="space-y-6">
						<div className="flex items-center gap-2">
							<img src="/tem/logo2.png" alt="logo" />
							VWAP GLIDE
							<Switch onToggle={console.log} />
						</div>
						<div className="p-6 border border-gray-500 rounded-md backdrop-blur-md bg-black/20">
							<div className="flex flex-wrap gap-2 items-center justify-between">
								<div>{d3.volume.coin}</div>
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
								</div>
							</div>
							<div className="my-4 flex gap-4 flex-wrap items-center">
								<span className="text-2xl">{d3.volume.value}</span>
								{d3.volume.up && (
									<div className="flex gap-2 items-center text-gray-400">
										{d3.volume.up}
										<div className="w-0 h-0 border-l-[10px] border-r-[10px] border-b-[10px] border-l-transparent border-r-transparent border-b-green-500"></div>
									</div>
								)}
								Volume
								{d3.volume.down && (
									<div className="flex gap-2 items-center text-gray-400">
										{d3.volume.down}
										<div className="w-0 h-0 border-l-[10px] border-r-[10px] border-t-[10px] border-l-transparent border-r-transparent border-t-red-500"></div>
									</div>
								)}
							</div>
							<img src="/tem/bar.png" className="w-full" alt="bar" />
							{/* Delete this img */}
						</div>
					</div>

					<div className="space-y-6">
						<div className="flex items-center gap-2">
							<img src="/tem/logo2.png" alt="logo" className="saturate-0" />
							SESSION PROFILE
							<Switch onToggle={console.log} />
						</div>
						<div className="p-6 border border-gray-500 rounded-md backdrop-blur-md bg-black/20">
							<div className="flex flex-wrap gap-2 items-center justify-between">
								<div>{d3.macd.coin}</div>
								<div className="flex flex-wrap gap-3">
									<Tab
										data={["15m", "1h", "4h", "all"].map((v) => ({
											children: v,
											value: v,
										}))}
										onChange={console.log}
									/>
								</div>
							</div>
							<div className="mt-4 flex gap-4 flex-wrap items-center">
								<span className="text-2xl">{d3.macd.value}</span>
								{d3.macd.up && (
									<div className="flex gap-2 items-center text-gray-400">
										{d3.macd.up}
										<div className="w-0 h-0 border-l-[10px] border-r-[10px] border-b-[10px] border-l-transparent border-r-transparent border-b-green-500"></div>
									</div>
								)}
								MACD
								{d3.macd.down && (
									<div className="flex gap-2 items-center text-gray-400">
										{d3.macd.down}
										<div className="w-0 h-0 border-l-[10px] border-r-[10px] border-t-[10px] border-l-transparent border-r-transparent border-t-red-500"></div>
									</div>
								)}
							</div>
						</div>
					</div>
				</div>

				<div className="flex flex-col gap-6">
					<div className="space-y-6">
						<div className="flex items-center gap-2">
							<img src="/tem/logo2.png" alt="logo" className="hue-rotate-60" />
							FLOWPRINT PRO
							<Switch onToggle={console.log} />
						</div>
						<div className="p-6 border border-gray-500 rounded-md backdrop-blur-md bg-black/20">
							<div className="flex flex-wrap gap-2 items-center justify-between">
								<div>{d3.rsi.coin}</div>
								<div className="flex flex-wrap gap-3">
									<Tab
										data={["15m", "1h", "4h", "all"].map((v) => ({
											children: v,
											value: v,
										}))}
										onChange={console.log}
									/>
								</div>
							</div>
							<div className="mt-4 flex gap-4 flex-wrap items-center">
								<span className="text-2xl">{d3.rsi.value}</span>
								{d3.rsi.up && (
									<div className="flex gap-2 items-center text-gray-400">
										{d3.rsi.up}
										<div className="w-0 h-0 border-l-[10px] border-r-[10px] border-b-[10px] border-l-transparent border-r-transparent border-b-green-500"></div>
									</div>
								)}
								RSI
								{d3.rsi.down && (
									<div className="flex gap-2 items-center text-gray-400">
										{d3.rsi.down}
										<div className="w-0 h-0 border-l-[10px] border-r-[10px] border-t-[10px] border-l-transparent border-r-transparent border-t-red-500"></div>
									</div>
								)}
							</div>
						</div>
					</div>

					<div className="space-y-6">
						<div className="flex items-center gap-2">
							<img
								src="/tem/logo2.png"
								alt="logo"
								className="hue-rotate-[110deg]"
							/>
							SMARTZONE
							<Switch onToggle={console.log} />
						</div>
						<div className="p-6 border border-gray-500 rounded-md backdrop-blur-md bg-black/20">
							<div className="flex flex-wrap gap-2 items-center justify-between">
								<div>{d3.atr.coin}</div>
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
								</div>
							</div>
							<div className="my-4 flex gap-4 flex-wrap items-center">
								<span className="text-2xl">{d3.atr.value}</span>
								{d3.atr.up && (
									<div className="flex gap-2 items-center text-gray-400">
										{d3.atr.up}
										<div className="w-0 h-0 border-l-[10px] border-r-[10px] border-b-[10px] border-l-transparent border-r-transparent border-b-green-500"></div>
									</div>
								)}
								ATR
								{d3.atr.down && (
									<div className="flex gap-2 items-center text-gray-400">
										{d3.atr.down}
										<div className="w-0 h-0 border-l-[10px] border-r-[10px] border-t-[10px] border-l-transparent border-r-transparent border-t-red-500"></div>
									</div>
								)}
							</div>
							<img src="/tem/bar.png" className="w-full" alt="bar" />
							{/* Delete this img */}
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
