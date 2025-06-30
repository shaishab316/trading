import dashboard from "../data/dashboard";
import { RiBarChart2Fill } from "react-icons/ri";
import { ImPower } from "react-icons/im";
import { DiBitbucket } from "react-icons/di";
import Switch from "../components/ui/Switch";
import GraphCard from "../components/graphCard/GraphCard";
import Button from "../components/ui/Button";
import { CiGlobe } from "react-icons/ci";
import { useAppDispatch, useAppSelector } from "../../hooks/redux";
import { openModal } from "../../redux/features/modal/modalSlice";
import { setExtensionMode } from "../../redux/features/config/configSlice";
import toast from "react-hot-toast";

const { d1, d2 } = dashboard;

export default function Dashboard() {
	const dispatch = useAppDispatch();
	const extensionMode = useAppSelector((state) => state.config.extensionMode);

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
				<div
					onClick={() =>
						extensionMode
							? dispatch(openModal("Extension"))
							: toast("Extension mode is disabled")
					}
					className="bg-[#00FFFF] border border-blue-600 py-2 px-4 text-black rounded-md flex items-center cursor-pointer"
				>
					<CiGlobe className="text-2xl" />
					<span className="ml-1 mr-3 whitespace-nowrap">Extension Mode</span>
					<Switch
						onToggle={(value) => {
							dispatch(setExtensionMode(value));
							if (value) dispatch(openModal("Extension"));
						}}
						init={false}
						className="bg-gray-300"
					/>
				</div>
			</div>

			<div className="py-6 grid grid-cols-1 lg:grid-cols-2 gap-6">
				<div className="flex flex-col gap-6">
					<div className="space-y-6">
						<div className="flex items-center gap-2">
							<img src="/tem/logo2.png" alt="logo" />
							VWAP GLIDE
							<Switch onToggle={() => {}} />
						</div>
						<GraphCard />
					</div>

					<div className="space-y-6">
						<div className="flex items-center gap-2">
							<img src="/tem/logo2.png" alt="logo" className="saturate-0" />
							SESSION PROFILE
							<Switch onToggle={() => {}} />
						</div>
						<GraphCard />
					</div>
				</div>

				<div className="flex flex-col gap-6">
					<div className="space-y-6">
						<div className="flex items-center gap-2">
							<img src="/tem/logo2.png" alt="logo" className="hue-rotate-60" />
							FLOWPRINT PRO
							<Switch onToggle={() => {}} />
						</div>
						<GraphCard />
					</div>

					<div className="space-y-6">
						<div className="flex items-center gap-2">
							<img
								src="/tem/logo2.png"
								alt="logo"
								className="hue-rotate-[110deg]"
							/>
							SMARTZONE
							<Switch onToggle={() => {}} />
						</div>
						<GraphCard />
					</div>
				</div>
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
				<h4 className="my-[23px]">Tech sector driving portfolio gains 📈</h4>
				<div className="flex flex-wrap gap-4">
					<Button className="text-[#C0C0C0] flex gap-2 px-6">
						<svg
							width="16"
							height="15"
							viewBox="0 0 16 15"
							fill="none"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path
								d="M3.95006e-10 7.49986V8.49986H0.1C0.330531 9.62922 0.944182 10.6443 1.8371 11.3732C2.73001 12.1021 3.84735 12.5001 5 12.4999V10.4999C4.24678 10.5013 3.52058 10.2194 2.96567 9.71003C2.41076 9.20071 2.06774 8.50128 2.00476 7.7507C1.94178 7.00012 2.16345 6.25331 2.62573 5.65864C3.08801 5.06397 3.75707 4.66495 4.5 4.54086V6.36786L8.803 3.49986L4.5 0.630859V2.52486C3.26668 2.64881 2.12338 3.22645 1.29188 4.14572C0.460384 5.06498 -1.55717e-05 6.26033 3.95006e-10 7.49986ZM16 7.49986V6.49986H15.9C15.6695 5.3705 15.0558 4.35546 14.1629 3.62655C13.27 2.89764 12.1527 2.49962 11 2.49986H10V4.49986H11C11.7532 4.49842 12.4794 4.78036 13.0343 5.28969C13.5892 5.79901 13.9323 6.49843 13.9952 7.24902C14.0582 7.9996 13.8366 8.7464 13.3743 9.34108C12.912 9.93575 12.2429 10.3348 11.5 10.4589V8.62986L7.197 11.4999L11.5 14.3679V12.4749C12.7333 12.3509 13.8766 11.7733 14.7081 10.854C15.5396 9.93474 16 8.73939 16 7.49986Z"
								fill="currentColor"
							/>
						</svg>
						Live Syncs
					</Button>

					<Button className="text-[#C0C0C0] flex gap-2 px-6">
						<svg
							width="13"
							height="13"
							viewBox="0 0 13 13"
							fill="none"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path
								d="M11.167 0.5H10.5003C9.76395 0.5 9.16699 1.09695 9.16699 1.83333V11.1667C9.16699 11.903 9.76395 12.5 10.5003 12.5H11.167C11.9034 12.5 12.5003 11.903 12.5003 11.1667V1.83333C12.5003 1.09695 11.9034 0.5 11.167 0.5Z"
								fill="currentColor"
							/>
							<path
								d="M6.83301 4.5H6.16634C5.42996 4.5 4.83301 5.09695 4.83301 5.83333V11.1667C4.83301 11.903 5.42996 12.5 6.16634 12.5H6.83301C7.56939 12.5 8.16634 11.903 8.16634 11.1667V5.83333C8.16634 5.09695 7.56939 4.5 6.83301 4.5Z"
								fill="currentColor"
							/>
							<path
								d="M2.5 9.1665H1.83333C1.09695 9.1665 0.5 9.76346 0.5 10.4998V11.1665C0.5 11.9029 1.09695 12.4998 1.83333 12.4998H2.5C3.23638 12.4998 3.83333 11.9029 3.83333 11.1665V10.4998C3.83333 9.76346 3.23638 9.1665 2.5 9.1665Z"
								fill="currentColor"
							/>
						</svg>
						Reports
					</Button>

					<Button className="text-[#C0C0C0] flex gap-2 px-6">Alerts</Button>
				</div>
				<img
					src="/ads.png"
					alt="ads"
					className="absolute bottom-6 right-6 rounded-md w-[200px] bg-white/90 py-1 px-2 select-none"
				/>
			</div>
		</div>
	);
}
