import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import GlobalContextProvider from "./Components/utils/global.context";
import "./index.css";
import App from "./App";
import Home from "./Routes/Home/Home";
import Detail from "./Routes/Detail/Detail";
import Contact from "./Routes/Contact/Contact";
import Favs from "./Routes/Favs/Favs";
import ErrorComponent from "./Routes/Error/Error";
import "bootstrap/dist/css/bootstrap.min.css";

ReactDOM.createRoot(document.getElementById("root")).render(
	<BrowserRouter>
		<GlobalContextProvider>
			<Routes>
				<Route path="/" element={<App />}>
					<Route path="/home" element={<Home />} />
					<Route path="/doctor/:id" element={<Detail />} />
					<Route path="/contact" element={<Contact />} />
					<Route path="/favs" element={<Favs />} />
					<Route path="*" element={<ErrorComponent />} />
				</Route>
			</Routes>
		</GlobalContextProvider>
	</BrowserRouter>
);
