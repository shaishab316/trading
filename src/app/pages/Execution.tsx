import execution from "../data/execution.json";
import { BiBarChartAlt2 } from "react-icons/bi";
import Tab from "../components/ui/Tab";
import { BsGraphUpArrow, BsPinAngle } from "react-icons/bs";
import ToggleButton from "../components/ui/ToggleButton";
import { IoSettingsOutline } from "react-icons/io5";
import Switch from "../components/ui/Switch";
import CopyButton from "../components/ui/CopyButton";
import { FaClipboardList, FaLock } from "react-icons/fa";
import { MdOutlinePriceChange } from "react-icons/md";
import { SlSizeActual } from "react-icons/sl";
import { IoMdWarning } from "react-icons/io";
import Tab2 from "../components/ui/Tab2";

const { d1, d2 } = execution;

export default function Execution() {
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
						{item.up && (
							<div className="flex gap-2 items-center">
								{item.up}
								<div className="w-0 h-0 border-l-[10px] border-r-[10px] border-b-[10px] border-l-transparent border-r-transparent border-b-green-500"></div>
							</div>
						)}
					</div>
				))}
			</div>

			<div className="mb-8">
				<h2 className="font-semibold text-2xl mb-4">Order Helper</h2>
				<div className="flex items-center gap-2">
					<img
						src="/tem/logo2.png"
						alt="logo"
						className="hue-rotate-[170deg]"
					/>
					AUTOWEALTH
					<Switch onToggle={console.log} />
					<IoSettingsOutline className="text-[#00ffff] text-2xl" />
					<div className="mx-8 relative">
						<CopyButton onCopy={console.log} data={Math.random().toString()} />
						<FaLock className="text text-yellow-500 absolute bottom-1 -right-6" />
					</div>
					<IoSettingsOutline className="text-[#00ffff] text-2xl" />
				</div>
			</div>

			<div className="border border-gray-600 p-2 rounded-md flex flex-wrap gap-4 justify-between items-center backdrop-blur-md bg-black/20">
				<div className="flex flex-wrap gap-4">
					<div className="flex justify-between items-center gap-2 border border-yellow-200/30 relative rounded-md p-2 bg-black">
						<FaClipboardList className="text-green-400" />
						Order
						<select className="text-sm px-4 focus:outline-0">
							<option value="CL_Jan_25" className="text-black">
								CL Jan 25
							</option>
						</select>
					</div>

					<div className="flex justify-between items-center gap-2 border border-yellow-200/30 relative rounded-md p-2 bg-black">
						<MdOutlinePriceChange className="text-green-400" />
						Price
						<input
							type="text"
							className="border border-yellow-200/30 rounded-lg w-[80px] text-center focus:outline-0 ml-6"
							defaultValue={79.89}
						/>
					</div>

					<div className="flex justify-between items-center gap-2 border border-yellow-200/30 relative rounded-md p-2 bg-black">
						<SlSizeActual className="text-green-400" />
						Size
						<select className="text-sm px-4 focus:outline-0">
							<option value="CL_Jan_25" className="text-black">
								2 Contracts
							</option>
						</select>
					</div>

					<div className="flex justify-between items-center gap-2 border border-yellow-200/30 relative rounded-md p-2 bg-black">
						<IoMdWarning className="text-green-400" />
						Risk
						<div className="flex gap-2 items-center ml-6">
							$1,596(1.5%)
							<div className="w-0 h-0 border-l-[10px] border-r-[10px] border-b-[10px] border-l-transparent border-r-transparent border-b-green-500"></div>
						</div>
					</div>
				</div>
			</div>

			<div className="py-6 flex flex-col gap-6">
				<div className="grid grid-cols-2 gap-6">
					<div className="p-6 grow border border-gray-500 rounded-md backdrop-blur-md bg-black/20">
						<div className="flex flex-wrap items-center justify-between">
							<Tab2
								data={["Buy", "Sell"].map((v) => ({
									children: v,
									value: v,
								}))}
								onChange={console.log}
							/>

							<Tab
								data={["Limit", "OCO"].map((v) => ({
									children: v,
									value: v,
								}))}
								init="OCO"
								onChange={console.log}
							/>
						</div>
					</div>

					<div className="p-6 grow border border-gray-500 rounded-md backdrop-blur-md bg-black/20">
						<div className="flex flex-wrap gap-2 items-center justify-between">
							<div>CL</div>
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
							</div>
						</div>
						<div className="my-4 flex gap-4 flex-wrap items-center">
							<span className="text-2xl">79.95</span>
							<div className="flex gap-2 items-center text-gray-400">
								2.3%
								<div className="w-0 h-0 border-l-[10px] border-r-[10px] border-b-[10px] border-l-transparent border-r-transparent border-b-green-500"></div>
							</div>
							Key Support
							<div className="flex gap-2 items-center">
								79.50%
								<div className="w-0 h-0 border-l-[10px] border-r-[10px] border-t-[10px] border-l-transparent border-r-transparent border-t-red-500"></div>
							</div>
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
