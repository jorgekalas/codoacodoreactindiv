import React from "react";
import "./Footer.css";
import { useContext } from "react";
import { GlobalContext } from "../../Components/utils/global.context";

const Footer = () => {
	const { theme, isDarkMode } = useContext(GlobalContext);

	return (
		<footer style={theme}>
				<div className={` ${isDarkMode ? "footer-dark" : "footer-light"} `}>Desarrollado por Jorge Kalas</div>
		</footer>
	);
};

export default Footer;
