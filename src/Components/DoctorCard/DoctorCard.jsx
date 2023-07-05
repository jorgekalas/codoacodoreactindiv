import React from "react";
import { Link } from "react-router-dom";
import { GlobalContext } from "../utils/global.context";
import { useContext } from "react";
import "./DoctorCard.css";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar, faXmark } from "@fortawesome/free-solid-svg-icons";
import { ToastContainer } from "react-toastify";

const DoctorCard = ({ doctor }) => {
	const {
		favsState,
		addFavoriteDoctor,
		removeFavoriteDoctor,
		theme,
		isDarkMode,
	} = useContext(GlobalContext);

	const isFavorite = favsState.favoritedoctors.some(
		(favorite) => favorite.id === doctor.id
	);

	const toggleFav = () => {
		isFavorite ? removeFavoriteDoctor(doctor) : addFavoriteDoctor(doctor);
	};

	return (
		<div key={doctor.id} className="cardContainer">
			<ToastContainer />
			<Link to={`/doctor/${doctor.id}`} className="link">
				<Card style={theme} border={`${isDarkMode ? "light" : "dark"}`}>
					<Card.Title className="cardTitle p-4 text-center" style={theme}>
						{doctor.name}
					</Card.Title>
					<Card.Img
						variant="top"
						src="/images/doctor.jpg"
						alt="doctor placeholder"
					/>
					<Card.Body className="cardBody">
						<Card.Text className="cardText cardTextId" style={theme}>
							ID: {doctor.id}
						</Card.Text>
						<Card.Text className="cardText" style={theme}>
							Nombre: {doctor.name}
						</Card.Text>
						<Card.Text className="cardText" style={theme}>
							Usuario: {doctor.username}
						</Card.Text>
					</Card.Body>
				</Card>
			</Link>
			<Button onClick={toggleFav} variant="primary" className="mt-4">
				{isFavorite ? (
					<div>
						<FontAwesomeIcon
							icon={faXmark}
							rotation={90}
							size="lg"
							style={{ color: "#FF6347" }}
						/>
						<span> Remover</span>
					</div>
				) : (
					<div>
						<FontAwesomeIcon
							icon={faStar}
							rotation={90}
							style={{ color: "#FFD700" }}
						/>
						<span> Agregar a favoritos</span>
					</div>
				)}
			</Button>
		</div>
	);
};

export default DoctorCard;
