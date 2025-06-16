import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { Provider as StoreProvider } from "react-redux";
import { RouterProvider } from "react-router-dom";
import { appRouter } from "./routes";
import { appStore, persistor } from "./redux/store";
import { Toaster } from "react-hot-toast";
import { PersistGate } from "redux-persist/integration/react";

createRoot(document.getElementById("√")!).render(
	<StrictMode>
		<StoreProvider store={appStore}>
			<PersistGate loading="loading auth" persistor={persistor}>
				<RouterProvider router={appRouter} />
				<Toaster />
			</PersistGate>
		</StoreProvider>
	</StrictMode>
);
