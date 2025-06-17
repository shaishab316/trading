import { createBrowserRouter, Navigate } from "react-router-dom";
import RootLayout from "../app/layouts/RootLayout";
import Dashboard from "../app/pages/Dashboard";
import Controls from "../app/pages/Controls";
import Research from "../app/pages/Research";
import Execution from "../app/pages/Execution";
import Logs from "../app/pages/Logs";
import Settings from "../app/pages/Settings";

export const appRouter = createBrowserRouter([
	{
		path: "/",
		element: <RootLayout />,
		children: [
			{
				path: "/",
				element: <Navigate to="/dashboard" />,
			},
			{
				path: "/dashboard",
				element: <Dashboard />,
			},
			{
				path: "/controls",
				element: <Controls />,
			},
			{
				path: "/research",
				element: <Research />,
			},
			{
				path: "/execution",
				element: <Execution />,
			},
			{
				path: "/logs",
				element: <Logs />,
			},
			{
				path: "/settings",
				element: <Settings />,
			},
			{
				path: "/:path",
				element: <>Not found</>,
			},
		],
	},
]);
