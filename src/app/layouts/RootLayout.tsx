import { Outlet, useNavigate } from "react-router-dom";
import Sidebar from "../components/sidebar";
import Navbar from "../components/navbar";
import Button from "../components/ui/Button";
import { IoArrowBackOutline, IoReload } from "react-icons/io5";
import { useState } from "react";
import Login from "../components/auth/login";
import { useAppSelector } from "../../hooks/redux";

export default function RootLayout() {
	const user = useAppSelector((state) => state.user.user);
	const navigate = useNavigate();
	const [reload, setReload] = useState(Math.random());
	const [loginOpen, setLoginOpen] = useState(!user);

	return (
		<>
			<div className="flex w-screen h-screen overflow-hidden bg-gradient-to-br from-[#001c1f] via-[#002933] to-[#00161a]">
				<Sidebar />
				<div id="√√" className="grow flex flex-col overflow-y-scroll relative">
					<Navbar setLoginOpen={setLoginOpen} />
					<div className="flex flex-wrap gap-4 items-center px-[10px] pt-[10px] md:px-[20px] md:pt-[20px] lg:px-[40px] lg:pt-[40px]">
						<Button
							title="Back"
							onClick={() => navigate(-1)}
							className="py-[5px]"
						>
							<IoArrowBackOutline className="inline-block mr-2" /> Back
						</Button>
						<Button
							onClick={() => setReload(Math.random())}
							title="Refresh"
							className="py-[5px]"
						>
							<IoReload className="inline-block mr-2" /> Refresh
						</Button>
						<span className="ml-3">
							<div className="inline-block w-[1em] aspect-square rounded-full bg-green-500 translate-y-0.5"></div>{" "}
							Real Time Data
						</span>
					</div>
					<div className="px-[10px] pb-[10px] md:px-[20px] md:pb-[20px] lg:px-[40px] lg:pb-[40px]">
						<Outlet key={reload} />
					</div>
				</div>
			</div>
			{/* Modals */}
			<Login open={loginOpen} setOpen={setLoginOpen} />
		</>
	);
}
