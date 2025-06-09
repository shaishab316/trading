import { IoArrowBackOutline, IoReload } from "react-icons/io5";
import Button from "../components/ui/Button";

export default function Dashboard() {
	return (
		<div className="p-[40px]">
			<div className="flex gap-4 items-center">
				<Button className="py-2">
					<IoArrowBackOutline className="inline-block mr-2" /> Back
				</Button>
				<Button className="py-2">
					<IoReload className="inline-block mr-2" /> Refresh
				</Button>
				<span>
					<div className="inline-block w-[1em] aspect-square rounded-full bg-green-500"></div>{" "}
					Real Time Data
				</span>
			</div>
		</div>
	);
}
