import { useAppSelector } from "../../hooks/redux";
import random from "../../utils/random";
import GraphCard from "../components/graphCard/GraphCard";
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
				<GraphCard
					data={{
						coin: "UB",
						volume: { value: "Equity curve", name: "Risk Exposure" },
						up: `${random(20, 100) | 0}`,
						down: `${random(20, 100) | 0}`,
					}}
				/>
			</div>
		</div>
	);
}
