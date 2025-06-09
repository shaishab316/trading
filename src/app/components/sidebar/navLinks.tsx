import type { IconType } from "react-icons";
import {
	IoBookOutline,
	IoSettingsOutline,
	IoTrendingUp,
} from "react-icons/io5";
import { MdOutlineFindInPage } from "react-icons/md";
import { RxDashboard } from "react-icons/rx";
import { SiRedux } from "react-icons/si";
import { VscHistory } from "react-icons/vsc";

export const navLinks: [name: string, href: string, icon: IconType][] = [
	["Dashboard", "/", RxDashboard],
	["Controls", "/controls", IoTrendingUp],
	["Research", "/research", MdOutlineFindInPage],
	["Execution", "/execution", SiRedux],
	["Logs / History", "/logs", VscHistory],
	["Journal", "/journal", IoBookOutline],
	["Settings", "/settings", IoSettingsOutline],
];
