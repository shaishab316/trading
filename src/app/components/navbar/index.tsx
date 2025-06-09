import { IoNotificationsOutline } from "react-icons/io5";
import { TfiHeadphoneAlt } from "react-icons/tfi";
import { useAppDispatch, useAppSelector } from "../../../hooks/redux";
import { login } from "../../../redux/features/user/userSlice";

export default function Navbar() {
	const dispatch = useAppDispatch();

	const path = useAppSelector((state) => state.navigation.currentPath);
	const user = useAppSelector((state) => state.user.user);

	return (
		<div className="flex items-center justify-between gap-4 py-4 px-[40px] text-white bg-[#0A0A0A33]">
			<h1 className="capitalize">{path}</h1>
			<div className="text-2xl flex items-center gap-4">
				{!user && (
					<button
						onClick={() => dispatch(login())}
						className="text-base border border-[#6FAFE7] bg-[radial-gradient(circle,_transparent,_#6FAFE7)] px-10 py-1 rounded-lg font-semibold hover:bg-[radial-gradient(circle,_#6FAFE7,_transparent)] transition"
						title="Login"
					>
						Login
					</button>
				)}
				<button title="Notifications">
					<IoNotificationsOutline />
				</button>
				<button title="Customer Support">
					<TfiHeadphoneAlt />
				</button>
				{user && (
					<button title={user.name}>
						<img
							src="/profile-pic.png"
							alt="profile"
							className="w-8 aspect-square rounded-full"
						/>
					</button>
				)}
			</div>
		</div>
	);
}
