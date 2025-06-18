import research from "../data/research";
import { IoSearchSharp } from "react-icons/io5";
import GraphCard from "../components/graphCard/GraphCard";
import Button from "../components/ui/Button";

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

			<div className="p-6 bg-gradient-to-b from-[#165067] to-[#078789] rounded-md relative">
				<div className="flex gap-3">
					<span className="text-2xl font-semibold">Wealthy AI</span>
					<img
						src="/tem/logo2.png"
						alt="logo"
						className="hue-rotate-[170deg] w-8 h-8"
					/>
				</div>
				<h4 className="my-[23px]">High correlation breaks likely</h4>
				<div className="flex flex-wrap gap-4">
					<Button className="text-[#C0C0C0] flex gap-2 px-6">
						<svg
							width="16"
							height="17"
							viewBox="0 0 16 17"
							fill="none"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path
								d="M5.33398 7.16667V5.16667C5.33398 3.69333 6.52732 2.5 8.00065 2.5C9.47398 2.5 10.6673 3.69333 10.6673 5.16667V7.16667M8.00065 10.5C8.17746 10.5 8.34703 10.4298 8.47206 10.3047C8.59708 10.1797 8.66732 10.0101 8.66732 9.83333C8.66732 9.65652 8.59708 9.48695 8.47206 9.36193C8.34703 9.2369 8.17746 9.16667 8.00065 9.16667C7.82384 9.16667 7.65427 9.2369 7.52925 9.36193C7.40422 9.48695 7.33398 9.65652 7.33398 9.83333C7.33398 10.0101 7.40422 10.1797 7.52925 10.3047C7.65427 10.4298 7.82384 10.5 8.00065 10.5ZM8.00065 10.5V12.5M4.40065 7.16667H11.6007C12.1873 7.16667 12.6673 7.64667 12.6673 8.23333V12.9C12.6673 13.78 11.9473 14.5 11.0673 14.5H4.93398C4.05398 14.5 3.33398 13.78 3.33398 12.9V8.23333C3.33398 7.64667 3.81398 7.16667 4.40065 7.16667Z"
								stroke="currentColor"
								stroke-width="1.5"
								stroke-miterlimit="10"
								stroke-linecap="round"
								stroke-linejoin="round"
							/>
						</svg>
						Save
					</Button>

					<Button className="text-[#C0C0C0] flex gap-2 px-6">
						<svg
							width="17"
							height="17"
							viewBox="0 0 17 17"
							fill="none"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path
								d="M14.5 14.5H3.03333C2.89188 14.5 2.75623 14.4438 2.65621 14.3438C2.55619 14.2438 2.5 14.1081 2.5 13.9667V2.5M4.5 9.83333L7.16667 7.16667L9.83333 9.83333L14.5 5.16667"
								stroke="currentColor"
								stroke-width="1.5"
								stroke-linecap="round"
								stroke-linejoin="round"
							/>
						</svg>
						Insight
					</Button>

					<Button className="text-[#C0C0C0] flex gap-2 px-6">
						<svg
							width="16"
							height="17"
							viewBox="0 0 16 17"
							fill="none"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path
								d="M5.33333 5.1665H3.33333C2.97971 5.1665 2.64057 5.30698 2.39052 5.55703C2.14048 5.80708 2 6.14622 2 6.49984V12.4998C2 12.8535 2.14048 13.1926 2.39052 13.4426C2.64057 13.6927 2.97971 13.8332 3.33333 13.8332H12.6667C13.0203 13.8332 13.3594 13.6927 13.6095 13.4426C13.8595 13.1926 14 12.8535 14 12.4998V6.49984C14 6.14622 13.8595 5.80708 13.6095 5.55703C13.3594 5.30698 13.0203 5.1665 12.6667 5.1665H10.6667M10 7.83317L8 9.83317M8 9.83317L6 7.83317M8 9.83317V3.1665"
								stroke="currentColor"
								stroke-linecap="round"
								stroke-linejoin="round"
							/>
						</svg>
						Export
					</Button>
				</div>
				<img
					src="/ads.png"
					alt="ads"
					className="absolute bottom-6 right-6 rounded-md w-[200px]"
				/>
			</div>
		</div>
	);
}
