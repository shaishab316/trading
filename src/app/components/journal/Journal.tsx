import type { IconType } from "react-icons";
import Modal from "../ui/Modal";
import { useState } from "react";
import { IoBookOutline } from "react-icons/io5";
import { MdDone } from "react-icons/md";
import { RxReload } from "react-icons/rx";

export default function Journal({
	name,
	open,
	Icon,
}: {
	name: string;
	open: boolean;
	Icon: IconType;
}) {
	const [modelOpen, setModelOpen] = useState(true);

	return (
		<>
			<button
				type="button"
				className={`text-white hover:bg-white/20 hover:backdrop-blur-md ${
					open ? "px-10" : "px-4 justify-center"
				} py-4 min-w-full flex items-center gap-2`}
				title={name}
				onClick={() => setModelOpen(true)}
			>
				<Icon />
				{open && <span>{name}</span>}
			</button>
			<Modal open={modelOpen} setOpen={setModelOpen}>
				<div className="bg-black/50 backdrop-blur-md rounded-md border border-[#e9c862] text-base">
					<div className="flex gap-4 items-center border-b border-[#808080] p-4">
						<IoBookOutline />
						Journal
					</div>
					<div className="p-4">
						<span className="font-semibold">Emotion</span>
						<div className="flex flex-wrap gap-[16px] mt-[16px] mb-[12px]">
							{["FOMO", "Discipline", "Confidence"].map((v) => (
								<button className="border border-[#6fafe7] rounded-md px-[30px] py-[10px]">
									{v}
								</button>
							))}
						</div>
						<div className="flex items-center justify-between">
							<button className="bg-gradient-to-b from-[#164b61] to-[#066c6c] rounded-full flex items-center justify-center">
								<span className="bg-[#12776b] w-[32px] aspect-square text-[#2ecc71] rounded-full flex items-center justify-center text-2xl">
									<MdDone />
								</span>
								<span className="pl-4 pr-6">Win</span>
							</button>

							<button className="bg-gradient-to-b from-[#164b61] to-[#066c6c] rounded-full flex items-center justify-center">
								<span className="bg-[#12776b] w-[32px] aspect-square text-[#2ecc71] rounded-full flex items-center justify-center text-2xl">
									<MdDone />
								</span>
								<span className="pl-4 pr-6">Loss</span>
							</button>

							<button className="bg-gradient-to-b from-[#376577] to-[#066c6c] rounded-full flex items-center justify-center">
								<span className="bg-[#2da2ad] w-[32px] aspect-square text-[#c0c0c0] rounded-full flex items-center justify-center text-2xl">
									<RxReload />
								</span>
								<span className="pl-4 pr-6">Breakeven</span>
							</button>
						</div>
					</div>
				</div>
			</Modal>
		</>
	);
}
