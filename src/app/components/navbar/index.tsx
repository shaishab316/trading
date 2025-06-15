import { IoNotificationsOutline } from "react-icons/io5";
import { TfiHeadphoneAlt } from "react-icons/tfi";
import { useAppSelector } from "../../../hooks/redux";
import Button from "../ui/Button";

export default function Navbar({
	setLoginOpen,
}: {
	setLoginOpen: (open: boolean) => void;
}) {
	const path = useAppSelector((state) => state.navigation.currentPath);
	const user = useAppSelector((state) => state.user.user);

	return (
		<>
			<div className="sticky top-0 z-10 backdrop-blur-md flex items-center justify-between gap-4 py-4 px-[40px] text-white bg-[#0A0A0A]/20">
				<h1 className="capitalize">{path}</h1>
				<div className="text-2xl flex items-center gap-4">
					{!user && (
						<Button
							onClick={() => setLoginOpen(true)}
							className="px-10"
							title="Login"
						>
							Login
						</Button>
					)}
					<button type="button" title="Notifications">
						<IoNotificationsOutline />
					</button>
					<button type="button" title="Customer Support">
						<TfiHeadphoneAlt />
					</button>
					{user && (
						<button type="button" title={user.name}>
							<img
								src="/tem/profile-pic.png"
								alt="profile"
								className="w-8 aspect-square rounded-full"
							/>
						</button>
					)}
				</div>
			</div>
		</>
	);
}
