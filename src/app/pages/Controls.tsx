import controls from "../data/controls";
import ToggleButton from "../components/ui/ToggleButton";
import { MdElectricBolt } from "react-icons/md";
import GraphCard from "../components/graphCard/GraphCard";

const { d1, d2 } = controls;

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
					<GraphCard data={d2.bid_ask_heat} option={{ pin: true }} />

					<GraphCard
						data={d2.yield_curve}
						option={{ pin: true, showFull: false }}
					/>
				</div>

				<div className="flex flex-col gap-6">
					<GraphCard
						data={d2.liquidity}
						option={{ pin: true, showFull: false }}
					/>

					<GraphCard data={d2.vwap} option={{ pin: true }} />
				</div>
			</div>
		</div>
	);
}
