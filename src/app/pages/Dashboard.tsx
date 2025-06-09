import { IoArrowBackOutline, IoReload } from "react-icons/io5";
import Button from "../components/ui/Button";
import overview from "../../app/data/overview.json";
import { RiBarChart2Fill } from "react-icons/ri";
import { ImPower } from "react-icons/im";
import { DiBitbucket } from "react-icons/di";
import { CiGlobe } from "react-icons/ci";
import { useState } from "react";

export default function Dashboard() {
	const [extMode, setExtMode] = useState(false);
	const [vwap, setVwap] = useState(false);

	return (
		<div className="p-[40px]">
			<div className="flex gap-4 items-center">
				<Button className="py-[5px]">
					<IoArrowBackOutline className="inline-block mr-2" /> Back
				</Button>
				<Button className="py-[5px]">
					<IoReload className="inline-block mr-2" /> Refresh
				</Button>
				<span className="ml-3">
					<div className="inline-block w-[1em] aspect-square rounded-full bg-green-500 translate-y-0.5"></div>{" "}
					Real Time Data
				</span>
			</div>

			<div className="grid grid-cols-4 gap-4 my-4">
				{overview["d1"].map((item, idx) => (
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

			<div className="border border-gray-600 p-2 rounded-md flex justify-between items-center">
				<div className="flex flex-wrap gap-4">
					{overview["d2"].map((item, idx) => (
						<div
							key={idx}
							className="flex justify-between items-center gap-2 border border-gray-700 relative rounded-md p-2"
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
				<button
					onClick={() => setExtMode(!extMode)}
					className="bg-[#00FFFF] border border-blue-600 py-2 px-4 text-black rounded-md flex items-center"
				>
					<CiGlobe className="text-2xl" />
					<span className="ml-1 mr-3">Extension Mode</span>
					<div className="bg-gray-300 rounded-full w-10 h-5 relative">
						<div
							className={`w-5 h-5 absolute top-0 rounded-full ${
								extMode
									? "right-0 bg-gradient-to-b from-[#F9DF7B] to-[#B57E10]"
									: "left-0 bg-gray-400"
							}`}
						></div>
					</div>
				</button>
			</div>

			<div className="py-6 grid grid-cols-2 gap-2">
				<div className="flex items-center gap-2">
					<img src="/logo2.png" alt="logo" />
					VWAP GLIDE
					<button
						className="bg-[#0f616d] rounded-full w-10 h-5 relative"
						onClick={() => setVwap(!vwap)}
					>
						<div
							className={`w-5 h-5 absolute top-0 rounded-full ${
								vwap
									? "right-0 bg-gradient-to-b from-[#F9DF7B] to-[#B57E10]"
									: "left-0 bg-gray-400"
							}`}
						></div>
					</button>
				</div>
			</div>
		</div>
	);
}
