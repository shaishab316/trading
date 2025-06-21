import { FaMinus, FaPlus } from "react-icons/fa";
import BreakpointSlider from "../ui/BreakpointSlider";
import Tab2 from "../ui/Tab2";
import Tab from "../ui/Tab";
import { useState, type FormEventHandler } from "react";
import toast from "react-hot-toast";
import sleep from "../../../utils/sleep";

export default function BuySell() {
	const [tab, setTab] = useState("Buy");

	const handleSubmit: FormEventHandler = async (e) => {
		e.preventDefault();
		const toastId = toast.loading(`${tab}ing...`);

		try {
			await sleep(1000); // Todo : Replace with actual logic
			toast.success(`${tab}ed successfully`, { id: toastId });
		} catch {
			toast.error(`${tab} failed`, { id: toastId });
		}
	};

	return (
		<form
			onSubmit={handleSubmit}
			className="p-6 grow border border-gray-500 rounded-md backdrop-blur-md bg-black/20"
		>
			<div className="flex flex-wrap gap-4 items-center justify-between">
				<Tab2
					data={["Buy", "Sell"].map((v) => ({
						children: v,
						value: v,
					}))}
					init={tab}
					onChange={setTab}
				/>

				<Tab
					data={["Limit", "OCO"].map((v) => ({
						children: v,
						value: v,
					}))}
					init="OCO"
					onChange={() => {}}
				/>
			</div>

			<div className="mt-4 flex flex-col gap-4">
				<div className="bg-black/20 backdrop-blur-md rounded-lg relative">
					<button
						type="button"
						className="absolute top-1/2 -translate-y-1/2 left-3"
					>
						<FaPlus />
					</button>
					<input
						type="number"
						placeholder="TP Limit (USDT)"
						className="w-full px-10 py-2 border border-yellow-200/30 rounded-lg focus: outline-0 focus:border-yellow-200/60"
					/>
					<button
						type="button"
						className="absolute top-1/2 -translate-y-1/2 right-3"
					>
						<FaMinus />
					</button>
				</div>

				<div className="bg-black/20 backdrop-blur-md rounded-lg relative">
					<button
						type="button"
						className="absolute top-1/2 -translate-y-1/2 left-3"
					>
						<FaPlus />
					</button>
					<input
						type="number"
						placeholder="SL Trigger (USTD)"
						className="w-full px-10 py-2 border border-yellow-200/30 rounded-lg focus: outline-0 focus:border-yellow-200/60"
					/>
					<button
						type="button"
						className="absolute top-1/2 -translate-y-1/2 right-3"
					>
						<FaMinus />
					</button>
				</div>

				<div className="flex gap-4">
					<div className="bg-black/20 backdrop-blur-md rounded-lg relative grow">
						<button
							type="button"
							className="absolute top-1/2 -translate-y-1/2 left-3"
						>
							<FaPlus />
						</button>
						<input
							type="number"
							placeholder="SL Limit"
							className="w-full px-10 py-2 border border-yellow-200/30 rounded-lg focus: outline-0 focus:border-yellow-200/60"
						/>
						<button
							type="button"
							className="absolute top-1/2 -translate-y-1/2 right-3"
						>
							<FaMinus />
						</button>
					</div>
					<input
						type="number"
						placeholder="Limit"
						className="px-4 py-2 border border-yellow-200/30 rounded-lg focus: outline-0 focus:border-yellow-200/60 bg-black/20 backdrop-blur-md"
					/>
				</div>

				<div className="bg-black/20 backdrop-blur-md rounded-lg relative">
					<button
						type="button"
						className="absolute top-1/2 -translate-y-1/2 left-3"
					>
						<FaPlus />
					</button>
					<input
						type="number"
						placeholder="Amount"
						className="w-full px-10 py-2 border border-yellow-200/30 rounded-lg focus: outline-0 focus:border-yellow-200/60"
					/>
					<button
						type="button"
						className="absolute top-1/2 -translate-y-1/2 right-3"
					>
						<FaMinus />
					</button>
				</div>
				<span className="self-end">
					Max <span className="text-[#2ecc71]">12.12</span>
				</span>
				<BreakpointSlider step={7} onChange={() => {}} />
				<button
					className={`${
						tab === "Buy" ? "bg-[#2ecc71]" : "bg-[#dc143c]"
					} rounded-lg px-4 py-2 mt-4 text-black`}
				>
					{tab}
				</button>
			</div>
		</form>
	);
}
