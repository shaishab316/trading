import { createBrowserRouter, Navigate } from "react-router-dom";
import Home from "../app/pages/Home";
import RootLayout from "../app/layouts/RootLayout";

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
				path: "/:path",
				element: <Home />,
			},
		],
	},
]);
