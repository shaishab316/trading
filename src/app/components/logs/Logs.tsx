import { useEffect, useState } from "react";
import random from "../../../utils/random";
import moment from "moment";

export default function Logs() {
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
						{Intl.NumberFormat("en", { notation: "compact" }).format(dollar)}
					</span>
					<span>{up ? "✅" : "❌"}</span>
				</div>
			))}
		</div>
	);
}
