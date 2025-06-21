import { RiVoiceAiFill } from "react-icons/ri";
import Modal from "../ui/Modal";
import { useState } from "react";
import Recorder from "../ui/Recorder";
import Collapse from "../ui/Collapse";
import Checkbox from "../ui/Checkbox";
import Button from "../ui/Button";
import random from "../../../utils/random";

const tabs = {
	Record: "Record",
	Capture: "Capture",
	Browser: "Browser",
	Screen: "Screen",
} as const;

type TTabs = keyof typeof tabs;

export default function CallWealthy({ open }: { open: boolean }) {
	const [openModal, setOpenModal] = useState(true);
	const [activeTab, setActiveTab] = useState<TTabs>(tabs.Capture);

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
				<div className="bg-[#0a1213] py-[16px] rounded-md border border-[#f8de7a] overflow-x-hidden relative pb-[120px]">
					<div className="flex gap-4 justify-between px-[16px]">
						<img src="/logo3.png" alt="logo" className="h-[34px] w-[120px]" />
						<button
							className={`flex gap-2 items-center bg-white/20 hover:bg-white/30 rounded-2xl p-1 text-lg`}
							title="Close Call Wealthy"
							onClick={() => setOpenModal(false)}
						>
							<RiVoiceAiFill className="text-[#B57E10] bg-black rounded-full w-6 h-6" />
						</button>
					</div>

					<div className="px-[16px] flex mt-[16px] overflow-x-auto hide-scroll">
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
								<div className="max-h-[150px] overflow-y-auto hide-scroll py-4">
									<Collapse
										title="Setting"
										init={true}
										className="w-fit max-h-[100px] overflow-y-auto"
									>
										<p className="flex items-center gap-2 mt-2">
											<Checkbox
												checkedElement={
													<div className="w-3 h-3 bg-[#6fafe7] rounded-sm" />
												}
											>
												Include Mic Audio
											</Checkbox>
										</p>
										<p className="flex items-center gap-2">
											<Checkbox
												checkedElement={
													<div className="w-3 h-3 bg-[#6fafe7] rounded-sm" />
												}
											>
												Capture Cursor
											</Checkbox>
										</p>
									</Collapse>
								</div>

								<div className="flex gap-3 mt-4">
									<button className="rounded-md bg-gradient-to-b group from-[#29ABE2] to-[#00FFFF] p-[1px] grow">
										<div className="flex gap-2 justify-between bg-[#0a1213] group-hover:bg-[#0a1213cc] rounded-md px-[8px] py-[4px]">
											<span>Account</span> <span>250K</span>
										</div>
									</button>

									<button className="rounded-md bg-gradient-to-b group from-[#29ABE2] to-[#00FFFF] p-[1px] grow">
										<div className="flex gap-2 justify-between bg-[#0a1213] group-hover:bg-[#0a1213cc] rounded-md px-[8px] py-[4px]">
											<span>PnL</span> <span>+4.2K</span>
										</div>
									</button>
								</div>
							</>
						)}

						{activeTab === tabs.Capture && (
							<>
								<Button className="w-full text-[#C0C0C0] justify-center gap-3 relative">
									<input
										type="file"
										className="absolute top-0 left-0 block h-full opacity-0"
									/>
									<svg
										width="1.5em"
										height="1.5em"
										viewBox="0 0 25 24"
										fill="none"
										xmlns="http://www.w3.org/2000/svg"
									>
										<path
											d="M17.2917 12C17.2917 13.7 15.9917 15 14.2917 15C12.5917 15 11.2917 13.7 11.2917 12C11.2917 10.3 12.5917 9 14.2917 9C15.9917 9 17.2917 10.3 17.2917 12ZM22.2917 7V18C22.2917 19.1 21.3917 20 20.2917 20H4.29175C3.19175 20 2.29175 19.1 2.29175 18L2.29175 7C2.29175 5.9 3.19175 5 4.29175 5V4L8.29175 4V5H10.2917L11.2917 3L17.2917 3L18.2917 5H20.2917C21.3917 5 22.2917 5.9 22.2917 7ZM7.79175 9C7.79175 8.2 7.09175 7.5 6.29175 7.5C5.49175 7.5 4.79175 8.2 4.79175 9C4.79175 9.8 5.49175 10.5 6.29175 10.5C7.09175 10.5 7.79175 9.8 7.79175 9ZM19.2917 12C19.2917 9.2 17.0917 7 14.2917 7C11.4917 7 9.29175 9.2 9.29175 12C9.29175 14.8 11.4917 17 14.2917 17C17.0917 17 19.2917 14.8 19.2917 12Z"
											fill="currentColor"
										/>
									</svg>
									Capture
								</Button>

								<div className="overflow-y-auto hide-scroll py-4">
									<Collapse
										title="Recent Captures"
										init={true}
										className="w-fit"
									>
										<div className="flex gap-[8px] items-center mt-2">
											<img
												src="/tem/capture.png"
												alt="capture"
												className="w-[60px] h-[60px]"
											/>
											Support: ${random(100, 900).toFixed(2)}
										</div>

										<div className="flex gap-[8px] items-center mt-2">
											<img
												src="/tem/capture.png"
												alt="capture"
												className="w-[60px] h-[60px]"
											/>
											Support: ${random(100, 900).toFixed(2)}
										</div>
									</Collapse>
								</div>
							</>
						)}

						{activeTab === tabs.Browser && (
							<>
								<Button className="text-[#C0C0C0] flex gap-2 w-full items-center justify-center">
									<svg
										width="1.5em"
										height="1.5em"
										viewBox="0 0 25 24"
										fill="none"
										xmlns="http://www.w3.org/2000/svg"
									>
										<path
											d="M17.9418 6.35C17.2016 5.60494 16.3213 5.01371 15.3516 4.61039C14.3819 4.20706 13.342 3.99962 12.2918 4C7.87176 4 4.30176 7.58 4.30176 12C4.30176 16.42 7.87176 20 12.2918 20C16.0218 20 19.1318 17.45 20.0218 14H17.9418C17.5298 15.1695 16.7651 16.1824 15.7531 16.8988C14.7411 17.6153 13.5317 18 12.2918 18C8.98176 18 6.29176 15.31 6.29176 12C6.29176 8.69 8.98176 6 12.2918 6C13.9518 6 15.4318 6.69 16.5118 7.78L13.2918 11H20.2918V4L17.9418 6.35Z"
											fill="currentColor"
										/>
									</svg>
									Refresh
								</Button>

								<button className="flex items-center text-base border border-[#f8de7a] bg-[radial-gradient(circle,_transparent,_#f8de7a99)] hover:bg-[#d7af44] hover:text-black py-1 px-4 rounded-md text-[#C0C0C0] gap-2 w-full mt-3 justify-center">
									<svg
										width="1.5em"
										height="1.5em"
										viewBox="0 0 25 24"
										fill="none"
										xmlns="http://www.w3.org/2000/svg"
									>
										<path
											d="M22.7917 20H1.79175V18H22.7917V20ZM22.7917 4V16L16.7917 16V4L22.7917 4ZM20.7917 6H18.7917V14H20.7917V6ZM15.2917 4V16H9.29175V4L15.2917 4ZM13.2917 6L11.2917 6V14H13.2917V6ZM7.79175 4L7.79175 16H1.79175L1.79175 4L7.79175 4ZM5.79175 6H3.79175L3.79175 14H5.79175L5.79175 6Z"
											fill="currentColor"
										/>
									</svg>
									Manage Tabs
								</button>

								<div className="overflow-y-auto hide-scroll py-4">
									<Collapse title="Active Tabs" init={true} className="w-fit">
										<div className="flex gap-[8px] items-center mt-2">
											<img
												src="/tem/capture2.png"
												alt="capture"
												className="w-[60px] h-[60px]"
											/>
											Trading View
										</div>

										<div className="flex gap-[8px] items-center mt-2">
											<img
												src="/tem/capture2.png"
												alt="capture"
												className="w-[60px] h-[60px]"
											/>
											Portfolio Dashboard
										</div>
									</Collapse>
								</div>
							</>
						)}
					</div>

					<div className="bg-gradient-to-b from-[#174d63aa] to-[#077070aa] backdrop-blur-sm hover:text-white p-[15px] mt-[10px] text-center absolute w-full bottom-[15px] left-0">
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

						{activeTab === tabs.Capture && (
							<div className="flex items-center gap-3">
								<Button className="text-[#C0C0C0] gap-2 grow justify-center">
									<svg
										width="1em"
										height="1em"
										viewBox="0 0 17 17"
										fill="none"
										xmlns="http://www.w3.org/2000/svg"
									>
										<path
											d="M10.165 6.51333L10.7784 7.12667L4.73835 13.1667H4.12502V12.5533L10.165 6.51333ZM12.565 2.5C12.3984 2.5 12.225 2.56667 12.0984 2.69333L10.8784 3.91333L13.3784 6.41333L14.5984 5.19333C14.6602 5.13166 14.7092 5.0584 14.7426 4.97775C14.7761 4.8971 14.7933 4.81065 14.7933 4.72333C14.7933 4.63602 14.7761 4.54957 14.7426 4.46892C14.7092 4.38827 14.6602 4.31501 14.5984 4.25333L13.0384 2.69333C12.905 2.56 12.7384 2.5 12.565 2.5ZM10.165 4.62667L2.79169 12L2.79169 14.5H5.29169L12.665 7.12667L10.165 4.62667Z"
											fill="currentColor"
										/>
									</svg>
									Annotate
								</Button>

								<Button className="text-[#C0C0C0] gap-2 grow justify-center">
									<svg
										width="1em"
										height="1em"
										viewBox="0 0 17 17"
										fill="none"
										xmlns="http://www.w3.org/2000/svg"
									>
										<path
											d="M4.62508 2.5C4.13885 2.5 3.67254 2.69315 3.32872 3.03697C2.9849 3.38079 2.79175 3.8471 2.79175 4.33333L2.79175 12.6667C2.79175 13.1529 2.9849 13.6192 3.32872 13.963C3.67254 14.3068 4.13885 14.5 4.62508 14.5H7.45775C7.45265 14.3669 7.46657 14.2338 7.49908 14.1047L7.65041 13.5H5.79175V10C5.79175 9.86739 5.84443 9.74021 5.93819 9.64645C6.03196 9.55268 6.15914 9.5 6.29175 9.5H10.6937L11.6504 8.54333C11.533 8.5148 11.4126 8.50026 11.2917 8.5H6.29175C5.89392 8.5 5.51239 8.65803 5.23109 8.93934C4.94978 9.22064 4.79175 9.60217 4.79175 10L4.79175 13.5H4.62508C4.16508 13.5 3.79175 13.1267 3.79175 12.6667L3.79175 4.33333C3.79175 3.87333 4.16508 3.5 4.62508 3.5H5.45841V5.33333C5.45841 5.53032 5.49721 5.72537 5.5726 5.90736C5.64798 6.08935 5.75847 6.25471 5.89775 6.39399C6.17906 6.6753 6.56059 6.83333 6.95841 6.83333H9.95841C10.1554 6.83333 10.3505 6.79453 10.5324 6.71915C10.7144 6.64377 10.8798 6.53328 11.0191 6.39399C11.1584 6.25471 11.2689 6.08935 11.3442 5.90736C11.4196 5.72537 11.4584 5.53032 11.4584 5.33333V3.51533C11.6971 3.55533 11.9197 3.66867 12.0931 3.842L13.4497 5.19867C13.6691 5.41733 13.7917 5.714 13.7917 6.024V7.17133C13.8389 7.16822 13.8862 7.16667 13.9337 7.16667H13.9351C14.2264 7.16667 14.5184 7.22467 14.7917 7.34067V6.02467C14.7918 5.74003 14.7358 5.45817 14.6269 5.19519C14.518 4.93221 14.3584 4.69326 14.1571 4.492L12.8004 3.13533C12.5992 2.93394 12.3603 2.77416 12.0973 2.66515C11.8343 2.55614 11.5524 2.50002 11.2677 2.5L4.62508 2.5ZM6.45841 5.33333V3.5L10.4584 3.5V5.33333C10.4584 5.46594 10.4057 5.59312 10.312 5.68689C10.2182 5.78065 10.091 5.83333 9.95841 5.83333H6.95841C6.82581 5.83333 6.69863 5.78065 6.60486 5.68689C6.51109 5.59312 6.45841 5.46594 6.45841 5.33333ZM13.9351 7.83333H13.9337C13.5437 7.83333 13.1537 7.982 12.8571 8.28L8.92241 12.2147C8.69327 12.4442 8.53042 12.7315 8.45108 13.046L8.14575 14.2667C8.11538 14.3881 8.117 14.5154 8.15044 14.636C8.18387 14.7566 8.248 14.8666 8.33655 14.9551C8.42511 15.0435 8.53508 15.1076 8.65574 15.1409C8.77641 15.1743 8.90365 15.1758 9.02508 15.1453L10.2451 14.8407C10.5598 14.7614 10.8473 14.5986 11.0771 14.3693L15.0117 10.4347C15.225 10.2217 15.3704 9.95024 15.4293 9.65464C15.4883 9.35905 15.4582 9.05261 15.343 8.7741C15.2277 8.49559 15.0324 8.25755 14.7818 8.09008C14.5312 7.92262 14.2365 7.83326 13.9351 7.83333Z"
											fill="currentColor"
										/>
									</svg>
									Save
								</Button>
							</div>
						)}

						{activeTab === tabs.Browser && (
							<div className="flex items-center gap-3">
								<Button className="text-[#C0C0C0] gap-2 grow justify-center">
									<svg
										width="1em"
										height="1em"
										viewBox="0 0 17 17"
										fill="none"
										xmlns="http://www.w3.org/2000/svg"
									>
										<path
											d="M13.0811 5.70329L11.1045 3.72529C9.75312 2.37195 9.07779 1.69662 8.35179 1.85662C7.62579 2.01662 7.29779 2.91462 6.63979 4.70995L6.19445 5.92529C6.01912 6.40395 5.93112 6.64329 5.77312 6.82862C5.70249 6.91195 5.62189 6.98629 5.53312 7.04995C5.33579 7.19195 5.09045 7.25929 4.59979 7.39462C3.49312 7.69995 2.93912 7.85262 2.73045 8.21462C2.64025 8.37131 2.59331 8.54916 2.59445 8.72995C2.59712 9.14795 3.00312 9.55395 3.81445 10.3666L4.75845 11.3106L1.77445 14.2973C1.68353 14.3937 1.63374 14.5217 1.63567 14.6542C1.63761 14.7867 1.6911 14.9132 1.7848 15.0069C1.8785 15.1006 2.00503 15.1541 2.13753 15.1561C2.27003 15.158 2.39806 15.1082 2.49445 15.0173L5.47779 12.0306L6.45512 13.0093C7.27245 13.8266 7.68112 14.236 8.10179 14.236C8.27845 14.236 8.45245 14.1906 8.60645 14.1026C8.97179 13.894 9.12512 13.3366 9.43245 12.2213C9.56712 11.7313 9.63445 11.4866 9.77579 11.2886C9.83801 11.2024 9.90957 11.1242 9.99045 11.054C10.1738 10.8953 10.4118 10.806 10.8871 10.6273L12.1165 10.1653C13.8925 9.49862 14.7805 9.16462 14.9365 8.44129C15.0931 7.71729 14.4231 7.04595 13.0811 5.70329Z"
											fill="currentColor"
										/>
									</svg>
									Pin Tab
								</Button>

								<Button className="text-[#C0C0C0] gap-2 grow justify-center">
									<svg
										width="1em"
										height="1em"
										viewBox="0 0 17 17"
										fill="none"
										xmlns="http://www.w3.org/2000/svg"
									>
										<path
											d="M4.12512 14.5L4.12512 3.83333C4.12512 3.46667 4.25579 3.15289 4.51712 2.892C4.77846 2.63111 5.09223 2.50044 5.45846 2.5L12.1251 2.5C12.4918 2.5 12.8058 2.63067 13.0671 2.892C13.3285 3.15333 13.4589 3.46711 13.4585 3.83333V14.5L8.79179 12.5L4.12512 14.5Z"
											fill="currentColor"
										/>
									</svg>
									Bookmark
								</Button>
							</div>
						)}
					</div>
				</div>
			</Modal>
		</>
	);
}
