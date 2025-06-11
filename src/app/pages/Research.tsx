import research from "../data/research.json";
import { BiBarChartAlt2 } from "react-icons/bi";
import Tab from "../components/ui/Tab";
import { BsGraphUpArrow, BsPinAngle } from "react-icons/bs";
import ToggleButton from "../components/ui/ToggleButton";
import { IoSearchSharp } from "react-icons/io5";

const { d1, d2 } = research;

export default function Controls() {
	return (
		<div>
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
					</div>
				))}
			</div>

			<div className="border border-gray-600 p-2 rounded-lg backdrop-blur-md bg-black/20">
				<div className="flex items-center gap-2 border border-gray-700 rounded-lg w-fit py-2 px-4">
					<IoSearchSharp className="text-green-500 text-2xl" />
					<input
						placeholder="Asset"
						type="text"
						className="focus:outline-none focus:border-0"
					/>
					<select
						onChange={(e) => console.log(e.target.value)}
						className="pr-2 focus:outline-none focus:border-0"
					>
						{["NQ", "UB", "ZB"].map((coin) => (
							<option className="text-black" value={coin}>
								{coin}
							</option>
						))}
					</select>
				</div>
			</div>

			<div className="py-6 flex flex-col gap-6">
				<div className="flex gap-6">
					<div className="p-6 grow border border-gray-500 rounded-md backdrop-blur-md bg-black/20">
						<div className="flex flex-wrap gap-2 items-center justify-between">
							<div>{d2.volume_surge.coin} Volume Surge</div>
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
						<div className="my-4 flex gap-4 flex-wrap items-center">
							<span className="text-2xl">{d2.volume_surge.value}</span>
							{d2.volume_surge.up !== null && (
								<div className="flex gap-2 items-center text-gray-400">
									{d2.volume_surge.up}
									<div className="w-0 h-0 border-l-[10px] border-r-[10px] border-b-[10px] border-l-transparent border-r-transparent border-b-green-500"></div>
								</div>
							)}
						</div>
						<img src="/tem/bar.png" className="w-full" alt="bar" />
						{/* Delete this img */}
					</div>

					<div className="p-6 grow border border-gray-500 rounded-md backdrop-blur-md bg-black/20">
						<div className="flex flex-wrap gap-2 items-center justify-between">
							<div>{d2.bullish_bias.coin} Sentiment</div>
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
						<div className="my-4 flex gap-4 flex-wrap items-center">
							<span className="text-2xl">{d2.bullish_bias.value}</span>
							{d2.bullish_bias.up !== null && (
								<div className="flex gap-2 items-center text-gray-400">
									{d2.bullish_bias.up}
									<div className="w-0 h-0 border-l-[10px] border-r-[10px] border-b-[10px] border-l-transparent border-r-transparent border-b-green-500"></div>
								</div>
							)}
							Bullish Bias
						</div>
						<img src="/tem/bar.png" className="w-full" alt="bar" />
						{/* Delete this img */}
					</div>
				</div>

				<div className="p-6 border border-gray-500 rounded-md backdrop-blur-md bg-black/20">
					<div className="flex flex-wrap gap-2 items-center justify-between">
						<div>Correlation Matrix ({d2.correlation_matrix.coin})</div>
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
								init="bar"
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
						<span className="text-2xl">{d2.correlation_matrix.value}</span>
						{d2.correlation_matrix.up !== null && (
							<div className="flex gap-2 items-center text-gray-400">
								{d2.correlation_matrix.up}
								<div className="w-0 h-0 border-l-[10px] border-r-[10px] border-b-[10px] border-l-transparent border-r-transparent border-b-green-500"></div>
							</div>
						)}
					</div>
					<img src="/tem/graph.png" className="w-full" alt="graph" />
					{/* Delete this img */}
				</div>
			</div>
		</div>
	);
}
