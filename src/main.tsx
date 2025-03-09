import { Suspense } from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { StyleSheetManager } from "styled-components";
import React from "react";

ReactDOM.createRoot(document.getElementById("root")!).render(
	<Suspense fallback={<div>Loading...</div>}>
		<BrowserRouter>
			<StyleSheetManager shouldForwardProp={(prop) => prop !== "shake"}>
				<App />
			</StyleSheetManager>
		</BrowserRouter>
	</Suspense>
);