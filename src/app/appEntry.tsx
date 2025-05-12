import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import { ThemeProvider } from "./providers/ThemeProvider";
import { store } from "./appStore";
import "../shared/index.css"

import { RouterProvider } from "react-router-dom";
import { appRouter } from "./appRouter";

createRoot(document.getElementById("root")!).render(
	<StrictMode>
		<ThemeProvider>
			<Provider store={store}>
				<RouterProvider router={appRouter}/>
			</Provider>
		</ThemeProvider>
	</StrictMode>
);
