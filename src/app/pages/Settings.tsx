import { useAppSelector } from "../../hooks/redux";
import GraphCard from "../components/graphCard/GraphCard";
import Button from "../components/ui/Button";
import Switch from "../components/ui/Switch";

export default function Settings() {
	const user = useAppSelector((state) => state.user.user);

	return (
		<div>
			<div className="my-[26px] border border-[#9b9b9b] p-[24px] rounded-md">
				<div className="flex items-center gap-[16px] mb-[16px]">
					<img
						src={user?.avatar}
						alt="Avatar"
						className="w-[80px] aspect-square rounded-full"
					/>
					<div>
						<h2>{user?.name}</h2>
						<p className="text-[#d4af37]">Platinum</p>
					</div>
				</div>
				<div className="flex items-center justify-between">
					<p>Member since jan {new Date().getFullYear()}</p>
					<div className="flex gap-[8px] items-center">
						<div className="flex items-center gap-2 px-[16px] text-[#77b0e3]">
							API Access <Switch />
						</div>
						<div className="flex items-center gap-2 px-[16px] text-[#77b0e3]">
							Dark Mode <Switch />
						</div>
						<div className="flex items-center gap-2 px-[16px] text-[#77b0e3]">
							Twp-Factor Authentication <Switch />
						</div>
					</div>
				</div>
			</div>

			<div>
				<h2 className="text-2xl font-semibold my-[26px]">Account summary</h2>
				<GraphCard />
			</div>

			<div className="p-6 mt-6 bg-gradient-to-b from-[#165067] to-[#078789] rounded-md relative">
				<div className="flex gap-3">
					<span className="text-2xl font-semibold">Wealthy AI</span>
					<img
						src="/tem/logo2.png"
						alt="logo"
						className="hue-rotate-[170deg] w-8 h-8"
					/>
				</div>
				<h4 className="my-[23px]">Consistent Monthly gains 📈</h4>
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
								strokeWidth="1.5"
								strokeMiterlimit="10"
								strokeLinecap="round"
								strokeLinejoin="round"
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
								d="M8.502 14.5C7.67267 14.5 6.89489 14.3442 6.16867 14.0327C5.44333 13.7211 4.80911 13.2962 4.266 12.758C3.72289 12.2198 3.29267 11.5864 2.97533 10.858C2.658 10.1296 2.49956 9.35244 2.5 8.52667H3.16667C3.16667 9.26 3.30778 9.94933 3.59 10.5947C3.87178 11.2404 4.25445 11.8049 4.738 12.288C5.22156 12.7711 5.78667 13.1524 6.43333 13.432C7.08 13.7116 7.76867 13.8511 8.49933 13.8507C9.98822 13.8507 11.2493 13.334 12.2827 12.3007C13.316 11.2673 13.8329 10.006 13.8333 8.51667C13.8338 7.02733 13.3171 5.76622 12.2833 4.73333C11.2496 3.70044 9.98844 3.18378 8.5 3.18333C7.41733 3.18333 6.44733 3.46778 5.59 4.03667C4.73356 4.60556 4.09333 5.34978 3.66933 6.26933H5.60267V6.936H2.5V3.83333H3.16667V5.82C3.64978 4.82978 4.36311 4.02889 5.30667 3.41733C6.25022 2.80578 7.31467 2.5 8.5 2.5C9.33022 2.5 10.1102 2.65756 10.84 2.97267C11.5698 3.28778 12.2049 3.71489 12.7453 4.254C13.2858 4.79311 13.7131 5.428 14.0273 6.15867C14.3416 6.88933 14.4991 7.66911 14.5 8.498C14.5009 9.32689 14.3436 10.1069 14.028 10.838C13.7124 11.5691 13.2849 12.2044 12.7453 12.744C12.2058 13.2836 11.5711 13.7113 10.8413 14.0273C10.1116 14.3433 9.33178 14.5009 8.502 14.5ZM6.57733 11.0133V7.83333H7.244V7.09C7.244 6.74422 7.36689 6.44822 7.61267 6.202C7.85844 5.95622 8.15422 5.83333 8.5 5.83333C8.84578 5.83333 9.14156 5.95644 9.38733 6.20267C9.63311 6.44889 9.75622 6.74444 9.75667 7.08933V7.83333H10.4233V11.0133H6.57733ZM7.75667 7.83333H9.24333V7.09467C9.24333 6.88578 9.17111 6.70867 9.02667 6.56333C8.88222 6.418 8.70667 6.34578 8.5 6.34667C8.29333 6.34756 8.11778 6.42 7.97333 6.564C7.82889 6.708 7.75644 6.88511 7.756 7.09533L7.75667 7.83333Z"
								fill="currentColor"
							/>
						</svg>
						Reset
					</Button>
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
