import { IoNotificationsOutline } from "react-icons/io5";
import { TfiHeadphoneAlt } from "react-icons/tfi";
import { useAppDispatch, useAppSelector } from "../../../hooks/redux";
import { login } from "../../../redux/features/user/userSlice";
import Button from "../ui/Button";

export default function Navbar() {
	const dispatch = useAppDispatch();

	const path = useAppSelector((state) => state.navigation.currentPath);
	const user = useAppSelector((state) => state.user.user);

	return (
		<div className="flex items-center justify-between gap-4 py-4 px-[40px] text-white bg-[#0A0A0A33]">
			<h1 className="capitalize">{path}</h1>
			<div className="text-2xl flex items-center gap-4">
				{!user && (
					<Button
						onClick={() => dispatch(login())}
						className="px-10"
						title="Login"
					>
						Login
					</Button>
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
							src="/tem/profile-pic.png"
							alt="profile"
							className="w-8 aspect-square rounded-full"
						/>
					</button>
				)}
			</div>
		</div>
	);
}
