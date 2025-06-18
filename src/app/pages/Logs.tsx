import logsXData from "../data/logs.json";
import { IoCalendarNumberOutline, IoSearchSharp } from "react-icons/io5";
import { GrStatusGood } from "react-icons/gr";
import random from "../../utils/random";
import GraphCard from "../components/graphCard/GraphCard";
import Logs from "../components/logs/Logs";
import Button from "../components/ui/Button";

const { d1 } = logsXData;

export default function Execution() {
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

			<div className="bg-black/20 border border-gray-500 rounded-md">
				<div className="p-4 flex items-center justify-between gap-2">
					<div className="flex gap-2">
						<div className="flex items-center gap-4 bg-black rounded-md w-fit p-2 border border-yellow-200/30">
							<div className="flex items-center">
								<IoCalendarNumberOutline className="inline-block mr-1" />
								Date
							</div>
							<select className="pr-2 focus:outline-0 focus:border-0">
								{["15m", "1h", "1d", "15d", "30d"].map((v) => (
									<option key={v} className="text-black">
										{v}
									</option>
								))}
							</select>
						</div>

						<div className="flex items-center gap-4 bg-black rounded-md w-fit p-2 border border-yellow-200/30">
							<div className="flex items-center">
								<GrStatusGood className="inline-block mr-1" />
								Status
							</div>
							<select className="pr-2 focus:outline-0 focus:border-0">
								{["All", "Pending", "Completed"].map((v) => (
									<option key={v} className="text-black">
										{v}
									</option>
								))}
							</select>
						</div>
					</div>
					<div className="text-white flex items-center text-base border border-[#6FAFE7] bg-[radial-gradient(circle,_transparent,_#6FAFE799)] hover:bg-[radial-gradient(circle,_#6FAFE799,_transparent)] px-4 rounded-md  py-[2px]">
						<IoSearchSharp className="inline-block mr-2" />{" "}
						<input
							type="text"
							placeholder="Search"
							className="focus:outline-0 focus:border-0 w-20 focus:w-fit"
						/>
					</div>
				</div>

				<div className="px-4 py-2 border-y border-gray-500">Date</div>

				<div className="px-4 py-6 flex flex-col gap-6">
					<div className="flex flex-col-reverse md:flex-row gap-6 h-fit">
						<Logs />

						<div className="md:w-1/2">
							<GraphCard
								data={{
									coin: "CL",
									volume: {
										name: "Key Support",
										value: `$${random(50, 100).toFixed(2)}`,
									},
									up: `${random(1, 5).toFixed(2)}%`,
									down: `${random(1, 100).toFixed(2)}`,
								}}
							/>
						</div>
					</div>
				</div>
			</div>

			<div className="p-6 mt-6 bg-gradient-to-b from-[#165067] to-[#078789] rounded-md relative">
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
								d="M8.00097 3.83315L7.76497 3.59715L8.00097 3.36182L8.23697 3.59715L8.00097 3.83315ZM8.33431 9.83315C8.33431 9.92155 8.29919 10.0063 8.23668 10.0689C8.17416 10.1314 8.08938 10.1665 8.00097 10.1665C7.91257 10.1665 7.82778 10.1314 7.76527 10.0689C7.70276 10.0063 7.66764 9.92155 7.66764 9.83315H8.33431ZM4.43164 6.93048L7.76497 3.59715L8.23697 4.06915L4.90364 7.40248L4.43164 6.93048ZM8.23697 3.59715L11.5703 6.93048L11.0983 7.40248L7.76497 4.06915L8.23697 3.59715ZM8.33431 3.83315V9.83315H7.66764V3.83315H8.33431Z"
								fill="currentColor"
							/>
							<path
								d="M3.33398 11.1665V11.8332C3.33398 12.1868 3.47446 12.5259 3.72451 12.776C3.97456 13.026 4.3137 13.1665 4.66732 13.1665H11.334C11.6876 13.1665 12.0267 13.026 12.2768 12.776C12.5268 12.5259 12.6673 12.1868 12.6673 11.8332V11.1665"
								stroke="currentColor"
							/>
						</svg>
						Export
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
								fill-rule="evenodd"
								clip-rule="evenodd"
								d="M8.5 14.5V10.5H9.5V14.5H14.5V5.50003H15.5V14.5C15.5 14.7652 15.3946 15.0196 15.2071 15.2071C15.0196 15.3947 14.7652 15.5 14.5 15.5H2.5C2.23478 15.5 1.98043 15.3947 1.79289 15.2071C1.60536 15.0196 1.5 14.7652 1.5 14.5V12.5H2.5V14.5H8.5ZM13.353 4.35403L10.354 7.35403C10.5144 7.68796 10.5456 8.06943 10.4415 8.42497C10.3374 8.78051 10.1055 9.08496 9.79031 9.27967C9.47515 9.47438 9.09908 9.54558 8.73456 9.47955C8.37003 9.41351 8.04284 9.21492 7.816 8.92203L5.102 9.82603L4.5 10.027C4.49369 10.3809 4.36249 10.721 4.12959 10.9875C3.8967 11.2539 3.5771 11.4294 3.2273 11.483C2.8775 11.5366 2.52003 11.4647 2.21807 11.2802C1.91611 11.0957 1.68912 10.8103 1.57721 10.4746C1.46531 10.1389 1.4757 9.77444 1.60655 9.44564C1.7374 9.11685 1.98028 8.8449 2.29226 8.67788C2.60424 8.51085 2.96523 8.45951 3.3114 8.53292C3.65758 8.60633 3.96666 8.79976 4.184 9.07903L7.5 7.97303C7.50446 7.72196 7.57188 7.47603 7.69608 7.25778C7.82029 7.03954 7.99729 6.85596 8.21087 6.7239C8.42444 6.59183 8.66776 6.51549 8.9185 6.50189C9.16924 6.48829 9.41939 6.53785 9.646 6.64603L12.646 3.64603C12.4935 3.32674 12.4588 2.9638 12.548 2.62138C12.6372 2.27896 12.8445 1.9791 13.1335 1.77479C13.4224 1.57049 13.7742 1.4749 14.1268 1.50492C14.4794 1.53494 14.81 1.68864 15.0602 1.93885C15.3104 2.18906 15.4641 2.51967 15.4941 2.87225C15.5241 3.22482 15.4285 3.57666 15.2242 3.86557C15.0199 4.15448 14.7201 4.36187 14.3777 4.45107C14.0352 4.54027 13.6723 4.50555 13.353 4.35303"
								fill="currentColor"
							/>
						</svg>
						Stats
					</Button>
				</div>
			</div>
		</div>
	);
}
