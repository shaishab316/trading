import { RiVoiceAiFill } from "react-icons/ri";
import Modal from "../ui/Modal";
import { useState } from "react";
import Recorder from "../ui/Recorder";

const tabs = {
	Record: "Record",
	Capture: "Capture",
	Browser: "Browser",
	Screen: "Screen",
} as const;

type TTabs = keyof typeof tabs;

export default function CallWealthy({ open }: { open: boolean }) {
	const [openModal, setOpenModal] = useState(true);
	const [activeTab, setActiveTab] = useState<TTabs>(tabs.Record);

	return (
		<>
			<button
				className={`flex gap-2 items-center bg-white/20 hover:bg-white/30 rounded-2xl p-1 text-lg`}
				title="Call Wealthy"
				onClick={() => setOpenModal(true)}
			>
				<RiVoiceAiFill className="text-[#B57E10] bg-black rounded-full w-6 h-6" />
				{open && <span className="mr-1 whitespace-nowrap">Call Wealthy</span>}
			</button>
			<Modal open={openModal} setOpen={setOpenModal}>
				<div className="bg-[#0a1213] py-[16px] rounded-md border border-[#f8de7a] max-h-[300px]">
					<div className="flex gap-4 justify-between px-[16px]">
						<img src="/logo3.png" alt="logo" className="h-[34px] w-[120px]" />
						<button
							className={`flex gap-2 items-center bg-white/20 hover:bg-white/30 rounded-2xl p-1 text-lg`}
							title="Call Wealthy"
							onClick={() => setOpenModal(false)}
						>
							<RiVoiceAiFill className="text-[#B57E10] bg-black rounded-full w-6 h-6" />
						</button>
					</div>

					<div className="px-[16px] flex mt-[16px]">
						{Object.values(tabs).map((tab) => {
							const active = activeTab === tab;

							return (
								<button
									key={tab}
									onClick={() => setActiveTab(tab)}
									className={`flex items-center hover:bg-gradient-to-b hover:from-[#174d63] hover:to-[#077070] hover:text-white ${
										active
											? "text-[#d1a63c] border-b border-[#d1a63c]"
											: "text-[#cccccc]"
									}`}
								>
									{active && (
										<div className="w-[5px] h-[5px] bg-[#2abc68] rounded-full ml-[4px]"></div>
									)}
									<div className="mx-[10px] my-[6px]">{tab}</div>
								</button>
							);
						})}
					</div>

					<div className="px-[16px] mt-[16px]">
						{activeTab === tabs.Record && (
							<>
								<Recorder />
							</>
						)}
					</div>

					<div className="bg-gradient-to-b from-[#174d63] to-[#077070] hover:text-white p-[15px] mt-[10px] text-center">
						{activeTab === tabs.Record && (
							<>
								<span className="text-2xl font-semibold flex gap-[8px] items-center justify-center">
									Wealthy AI
									<svg
										width="1em"
										height="1em"
										viewBox="0 0 17 17"
										fill="none"
										xmlns="http://www.w3.org/2000/svg"
									>
										<path
											d="M10.5417 6.49991L7.87506 5.49991L10.5417 4.49891L11.5417 1.83325L12.5427 4.49891L15.2084 5.49991L12.5427 6.49991L11.5417 9.16656L10.5417 6.49991ZM5.20837 11.8333L1.87506 10.4999L5.20837 9.16656L6.54172 5.83325L7.87506 9.16656L11.2084 10.4999L7.87506 11.8333L6.54172 15.1666L5.20837 11.8333Z"
											fill="currentColor"
										/>
									</svg>
								</span>
								<span className="text-[#C0C0C0] mt-4">
									Record charts for later analysis.
								</span>
							</>
						)}
					</div>
				</div>
			</Modal>
		</>
	);
}
