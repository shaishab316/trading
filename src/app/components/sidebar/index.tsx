import { NavLink } from "react-router-dom";
import { navLinks } from "./navLinks";
import { useState } from "react";
import { GoSidebarCollapse, GoSidebarExpand } from "react-icons/go";
import { TbLogout2 } from "react-icons/tb";
import { RiVoiceAiFill } from "react-icons/ri";
import { useAppDispatch, useAppSelector } from "../../../hooks/redux";
import { setCurrentPath } from "../../../redux/features/navigation/navigationSlice";
import { logout } from "../../../redux/features/user/userSlice";
import Journal from "../journal/Journal";
import toast from "react-hot-toast";
import sleep from "../../../utils/sleep";

export default function Sidebar() {
	const dispatch = useAppDispatch();

	const [open, setOpen] = useState(false);
	const user = useAppSelector((state) => state.user.user);

	const handleLogout = async () => {
		const toastId = toast.loading("Logging out...");

		try {
			await sleep(1000); // Todo : Replace with actual logic
			toast.success("Logged out successfully", { id: toastId });
			dispatch(logout());
		} catch {
			toast.error("Failed to logout", { id: toastId });
		}
	};

	return (
		<div className="w-fit min-w-[70px] flex flex-col relative h-screen overflow-y-auto pb-4 bg-[#0A0A0A33] text-2xl">
			<img
				src="/logo.png"
				alt="logo"
				className={`aspect-square ${
					open ? "mx-16 mt-8 mb-4 w-[160px]" : "m-0 mx-2 mt-2 w-[80px]"
				} mx-auto`}
			/>
			<div className="grow">
				<div
					className={`${
						open ? "px-10" : "px-4 justify-center"
					} py-4 sticky top-0 z-10 text-white flex`}
				>
					<button type="button" className="hidden lg:inline-block">
						{open ? (
							<GoSidebarExpand
								onClick={() => setOpen(false)}
								title="Collapse sidebar"
							/>
						) : (
							<GoSidebarCollapse
								onClick={() => setOpen(true)}
								title="Expand sidebar"
							/>
						)}
					</button>
				</div>
				<div className="flex flex-col">
					{navLinks.map(([name, href, Icon]) =>
						name === "Journal" ? (
							<Journal name={name} open={open} Icon={Icon} />
						) : (
							<NavLink
								to={href}
								className={({ isActive }) =>
									`${
										isActive
											? "text-[#B57E10] border-r-2 lg:border-r-4"
											: "text-white"
									} hover:bg-white/20 hover:backdrop-blur-md ${
										open ? "px-10" : "px-4 justify-center"
									} py-4 min-w-full flex`
								}
								title={name}
								onClick={() => dispatch(setCurrentPath({ path: name }))}
							>
								<button type="button" className="flex items-center gap-2">
									<Icon />
									{open && <span>{name}</span>}
								</button>
							</NavLink>
						)
					)}
				</div>
			</div>
			<div className="mx-auto lg:mx-0 lg:px-10 py-4 space-y-6 text-white">
				{user && (
					<button type="button" onClick={handleLogout} title="Logout">
						<TbLogout2 />
					</button>
				)}
				<button
					className={`flex gap-2 items-center bg-white/20 hover:bg-white/30 rounded-2xl p-1 text-lg`}
					title="Call Wealthy"
				>
					<RiVoiceAiFill className="text-[#B57E10] bg-black rounded-full w-6 h-6" />
					{open && <span className="mr-1">Call Wealthy</span>}
				</button>
			</div>
		</div>
	);
}
