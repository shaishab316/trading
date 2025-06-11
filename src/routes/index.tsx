import { createBrowserRouter, Navigate } from "react-router-dom";
import Home from "../app/pages/Home";
import RootLayout from "../app/layouts/RootLayout";
import Dashboard from "../app/pages/Dashboard";
import Controls from "../app/pages/Controls";

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
				path: "/:path",
				element: <Home />,
			},
		],
	},
]);
