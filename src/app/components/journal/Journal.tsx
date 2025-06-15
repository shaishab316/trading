import type { IconType } from "react-icons";
import Modal from "../ui/Modal";
import { useRef, useState } from "react";
import { IoBookOutline } from "react-icons/io5";
import { MdDone } from "react-icons/md";
import { TbReload, TbXboxX } from "react-icons/tb";
import toast from "react-hot-toast";
import sleep from "../../../utils/sleep";

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
	const fileRef = useRef<HTMLInputElement>(null);

	const handleSave = async () => {
		const toastId = toast.loading("Saving...");
		setModelOpen(false);

		try {
			await sleep(1000); // Todo : Replace with actual logic
			toast.success("Saved successfully", { id: toastId });
		} catch {
			toast.error("Failed to save", { id: toastId });
		}
	};

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
								<button className="border border-[#6fafe7] rounded-xl px-[30px] py-[10px]">
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

							<button className="bg-gradient-to-b from-[#5d0e1e] to-[#3b0b14] rounded-full flex items-center justify-center">
								<span className="bg-[#6a0e20] w-[32px] aspect-square text-[#c0c0c0] rounded-full flex items-center justify-center text-2xl">
									<TbXboxX />
								</span>
								<span className="pl-4 pr-6">Loss</span>
							</button>

							<button className="bg-gradient-to-b from-[#376577] to-[#066c6c] rounded-full flex items-center justify-center">
								<span className="bg-[#2da2ad] w-[32px] aspect-square text-[#c0c0c0] rounded-full flex items-center justify-center text-2xl">
									<TbReload />
								</span>
								<span className="pl-4 pr-6">Breakeven</span>
							</button>
						</div>
					</div>
					<div className="px-4">
						<textarea
							placeholder="Describe what happened. What Would you do differently?"
							className="w-full border border-[#5b4c1c] p-[7px] rounded-md focus:outline-0 focus:border-[#e9c862]"
							rows={5}
						></textarea>
					</div>
					<div className="px-4 my-4">
						<button
							type="button"
							className="bg-gradient-to-b from-[#164b61] to-[#066c6c] rounded-md flex py-[20px] px-[12px] gap-[10px] w-full items-center"
							onClick={() => fileRef.current?.click()}
						>
							<svg
								width="19"
								height="20"
								viewBox="0 0 19 20"
								fill="none"
								xmlns="http://www.w3.org/2000/svg"
							>
								<path
									d="M8 7.5H10V15.5H8V7.5ZM6 15.5V9.5H4V15.5H6ZM16 17.5H2V3.5H8V1.5H0V19.5H18V11.5H16V17.5ZM12 11.5V15.5H14V11.5H12ZM16 3.5V0.5H14V3.5H11V5.5H14V8.5H16V5.5H19V3.5H16Z"
									fill="#C0C0C0"
								/>
							</svg>
							<span className="text-[#90a0a2]">Attach Chart or Clip</span>
						</button>
						<input accept="image/*" ref={fileRef} type="file" hidden />
					</div>
					<div className="px-4 mb-4">
						<button
							onClick={handleSave}
							className="bg-[#00ffff] w-full p-[21px] text-center rounded-md text-black"
						>
							Save
						</button>
					</div>
				</div>
			</Modal>
		</>
	);
}
