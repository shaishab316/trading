import { Outlet } from "react-router-dom";
import Sidebar from "../components/sidebar";

export default function RootLayout() {
	return (
		<div className="flex w-screen h-screen overflow-hidden bg-gradient-to-br from-[#001c1f] via-[#002933] to-[#00161a] ">
			<Sidebar />
			<div>
				<Outlet />
			</div>
		</div>
	);
}
