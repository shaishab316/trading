import research from "../data/research";
import { IoSearchSharp } from "react-icons/io5";
import GraphCard from "../components/graphCard/GraphCard";

const { d1, d2 } = research;

export default function Research() {
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

			<div className="flex w-full border border-gray-600 p-2 rounded-lg backdrop-blur-md bg-black/20">
				<div className="flex items-center gap-2 border border-gray-700 rounded-lg py-2 px-4 bg-black">
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
				<div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
					<GraphCard data={d2.volume_surge} option={{ pin: true }} />

					<GraphCard data={d2.bullish_bias} option={{ pin: true }} />
				</div>

				<GraphCard data={d2.correlation_matrix} option={{ pin: true }} />
			</div>
		</div>
	);
}
