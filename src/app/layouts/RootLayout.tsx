import { Outlet } from "react-router-dom";
import Sidebar from "../components/sidebar";
import Navbar from "../components/navbar";

export default function RootLayout() {
	return (
		<div className="flex w-screen h-screen overflow-hidden bg-gradient-to-br from-[#001c1f] via-[#002933] to-[#00161a]">
			<Sidebar />
			<div className="grow flex flex-col overflow-y-scroll relative">
				<Navbar />
				<Outlet />
			</div>
		</div>
	);
}
