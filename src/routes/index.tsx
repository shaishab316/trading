import { createBrowserRouter, Navigate } from "react-router-dom";
import Home from "../app/pages/Home";
import RootLayout from "../app/layouts/RootLayout";
import Dashboard from "../app/pages/Dashboard";

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
				path: "/:path",
				element: <Home />,
			},
		],
	},
]);
