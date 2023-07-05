import { useEffect } from "react";
import "./App.css";
import Footer from "./Components/Footer/Footer";
import NavBar from "./Components/Navbar/NavBar";
import { Outlet, useNavigate, useLocation } from "react-router-dom";
import { useContext } from "react";
import { GlobalContext } from "./Components/utils/global.context";

function App() {
	const location = useLocation();
	const navigate = useNavigate();
	const { theme } = useContext(GlobalContext);

	useEffect(() => {
		location.pathname === "/" && navigate("/home");
	}, []);

	return (
		<div className="App">
			<NavBar />
			<main style={theme}>
				<Outlet />
			</main>
			<Footer />
		</div>
	);
}

export default App;
