import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { Provider as StoreProvider } from "react-redux";
import { RouterProvider } from "react-router-dom";
import { appRouter } from "./routes";
import { appStore } from "./redux/store";

createRoot(document.getElementById("√")!).render(
	<StrictMode>
		<StoreProvider store={appStore}>
			<RouterProvider router={appRouter} />
		</StoreProvider>
	</StrictMode>
);
