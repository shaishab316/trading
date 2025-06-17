import logsXData from "../data/logs.json";
import { IoCalendarNumberOutline, IoSearchSharp } from "react-icons/io5";
import { GrStatusGood } from "react-icons/gr";
import random from "../../utils/random";
import moment from "moment";
import { useEffect, useState } from "react";
import GraphCard from "../components/graphCard/GraphCard";

const { d1 } = logsXData;

export default function Execution() {
	const [logs, setLogs] = useState(
		Array.from({ length: 9 }, () => ({
			date: new Date(Date.now() - Math.floor(Math.random() * 10000000000)),
			up: !!(random(0, 1) | 0),
			amount: random(1_000, 10_000) | 0,
			dollar: random(1_000, 10_000_000) | 0,
			coin: ["UB", "ZB", "ES", "NQ", "GC", "SI", "PL"][random(0, 6) | 0],
		}))
	);

	useEffect(() => {
		const id = setInterval(() => {
			setLogs((prev) => [
				{
					date: new Date(Date.now() - Math.floor(Math.random() * 10000000000)),
					up: !!(random(0, 1) | 0),
					amount: random(1_000, 10_000) | 0,
					dollar: random(1_000, 10_000_000) | 0,
					coin: ["UB", "ZB", "ES", "NQ", "GC", "SI", "PL"][random(0, 6) | 0],
				},
				...prev.slice(0, 8),
			]);
		}, 1000);
		return () => clearInterval(id);
	}, []);

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

			<div className="bg-black/20 border border-gray-500 rounded-md">
				<div className="p-4 flex items-center justify-between gap-2">
					<div className="flex gap-2">
						<div className="flex items-center gap-4 bg-black rounded-md w-fit p-2 border border-yellow-200/30">
							<div className="flex items-center">
								<IoCalendarNumberOutline className="inline-block mr-1" />
								Date
							</div>
							<select className="pr-2 focus:outline-0 focus:border-0">
								{["15m", "1h", "1d", "15d", "30d"].map((v) => (
									<option key={v} className="text-black">
										{v}
									</option>
								))}
							</select>
						</div>

						<div className="flex items-center gap-4 bg-black rounded-md w-fit p-2 border border-yellow-200/30">
							<div className="flex items-center">
								<GrStatusGood className="inline-block mr-1" />
								Status
							</div>
							<select className="pr-2 focus:outline-0 focus:border-0">
								{["All", "Pending", "Completed"].map((v) => (
									<option key={v} className="text-black">
										{v}
									</option>
								))}
							</select>
						</div>
					</div>
					<div className="text-white flex items-center text-base border border-[#6FAFE7] bg-[radial-gradient(circle,_transparent,_#6FAFE799)] hover:bg-[radial-gradient(circle,_#6FAFE799,_transparent)] px-4 rounded-md  py-[2px]">
						<IoSearchSharp className="inline-block mr-2" />{" "}
						<input
							type="text"
							placeholder="Search"
							className="focus:outline-0 focus:border-0 w-20 focus:w-fit"
						/>
					</div>
				</div>

				<div className="px-4 py-2 border-y border-gray-500">Date</div>

				<div className="px-4 py-6 flex flex-col gap-6">
					<div className="flex flex-col-reverse md:flex-row gap-6 h-fit">
						<div className="flex flex-col gap-2 md:w-1/2">
							{logs.map(({ date, amount, dollar, up, coin }) => (
								<div className="flex gap-2 items-center justify-between p-2 border border-gray-500/30 rounded-md hover:bg-gray-600 cursor-pointer">
									<span>{moment(date).format("YYYY-MM-DD")}</span>
									<span>{moment(date).format("hh:mm A")}</span>
									<span className="flex items-center gap-2">
										{coin}
										{up ? (
											<div className="flex gap-2 items-center">
												<div className="w-0 h-0 border-l-[10px] border-r-[10px] border-b-[10px] border-l-transparent border-r-transparent border-b-green-500"></div>
											</div>
										) : (
											<div className="flex gap-2 items-center">
												<div className="w-0 h-0 border-l-[10px] border-r-[10px] border-t-[10px] border-l-transparent border-r-transparent border-t-red-500"></div>
											</div>
										)}
									</span>
									<span>{amount}</span>
									<span>
										{up ? "+" : "-"}$
										{Intl.NumberFormat("en", { notation: "compact" }).format(
											dollar
										)}
									</span>
									<span>{up ? "✅" : "❌"}</span>
								</div>
							))}
						</div>

						<div className="md:w-1/2">
							<GraphCard
								data={{
									coin: "CL",
									volume: {
										name: "Key Support",
										value: `$${random(50, 100).toFixed(2)}`,
									},
									up: `${random(1, 5).toFixed(2)}%`,
									down: `${random(1, 100).toFixed(2)}`,
								}}
							/>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
