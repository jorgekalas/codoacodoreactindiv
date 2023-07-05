import React from "react";
import { Link } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Button from "react-bootstrap/Button";
import { GlobalContext } from "../utils/global.context";
import { useContext } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSun, faMoon } from "@fortawesome/free-solid-svg-icons";

const NavBar = () => {
	const { toggleTheme, isDarkMode } = useContext(GlobalContext);

	const onChangeTheme = () => {
		toggleTheme();
	};

	return (
		<header>
			<Navbar
				sticky="top"
				expand="sm"
				className={`p-4 ${
					isDarkMode ? "navbar-dark bg-dark" : "navbar-light bg-light"
				}`}
			>
				<Container>
					<Link to="/home" className="navbar-brand">
						Sistema de gestión de médicos
					</Link>
					<Nav className="me-auto text-center">
						<ul className="navbar-nav mb-2 mb-sm-0 ms-4">
							<li className="nav-item">
								<Link to="/home" className="nav-link">
									Home
								</Link>
							</li>
							<li className="nav-item">
								<Link to="/contact" className="nav-link">
									Contacto
								</Link>
							</li>
							<li className="nav-item">
								<Link to="/favs" className="nav-link">
									Favoritos
								</Link>
							</li>
						</ul>
					</Nav>
					<Button
						className="themeButton"
						onClick={onChangeTheme}
						variant="secondary"
						style={{ width: "3rem", height: "3rem", borderRadius: "50%" }}
					>
						{isDarkMode ? (
							<FontAwesomeIcon
								icon={faSun}
								size="lg"
								style={{ color: "#FFD700" }}
							/>
						) : (
							<FontAwesomeIcon
								icon={faMoon}
								size="lg"
								style={{ color: "#FFD700" }}
							/>
						)}
					</Button>
				</Container>
			</Navbar>
		</header>
	);
};

export default NavBar;
