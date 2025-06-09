import { IoNotificationsOutline } from "react-icons/io5";
import { TfiHeadphoneAlt } from "react-icons/tfi";

export default function Navbar() {
	return (
		<div className="flex items-center justify-between gap-4 py-4 px-[40px] text-white bg-[#0A0A0A33]">
			<h1>Navbar</h1>
			<div className="text-2xl flex items-center gap-4">
				<button className="text-base border border-[#6FAFE7] bg-[radial-gradient(circle,_transparent,_#6FAFE7)] px-10 py-1 rounded-lg font-semibold hover:bg-[radial-gradient(circle,_#6FAFE7,_transparent)] transition">
					Login
				</button>
				<button>
					<IoNotificationsOutline />
				</button>
				<button>
					<TfiHeadphoneAlt />
				</button>
				<button>
					<img
						src="/profile-pic.png"
						alt="profile"
						className="w-8 aspect-square rounded-full"
					/>
				</button>
			</div>
		</div>
	);
}
