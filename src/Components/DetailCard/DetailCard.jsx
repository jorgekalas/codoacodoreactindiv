import { useEffect, useContext, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { GlobalContext } from "../utils/global.context";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";

const DetailCard = () => {
	const [doctor, setDoctor] = useState([]);
	const { theme, isDarkMode } = useContext(GlobalContext);
	const params = useParams();
	const idParam = parseInt(params.id);
	const navigate = useNavigate();


	const getDoctorById = async () => {
		try {
			const response = await fetch(
				`https://jsonplaceholder.typicode.com/users/${idParam}`
			);
			const data = await response.json();
			setDoctor(data);
		} catch (error) {
			console.error(error);
		}
	};


	useEffect(() => {
		getDoctorById();
	}, [params]);

	return (
		<>
			{doctor && (
				<section>
					<div className="d-flex flex-column align-items-center m-3">
						<h1 className="mb-5 text-center mt-4">
						Detalles sobre el doctor {doctor.name}
						</h1>
						<section
							className={`card col-sm-12 col-lg-6 container ${
								isDarkMode ? "border-light" : "border-dark"
							}`}
							style={theme}
						>
							<div className={`card-body row `}>
								<div className={`col-sm-12 col-lg-6`}>
									<img
										className="card-img-top"
										src="/images/doctor.jpg"
										alt="doctor placeholder"
									/>
								</div>
								<div className={`col-sm-12 col-lg-6 `}>
									<ul className={`list-group`}>
										<li className={`list-group-item ${isDarkMode? "border-light" : "border-secondary"}`} style={theme}>
											<u><i>Nombre</i></u>: {doctor.name}
										</li>
										<li className={`list-group-item ${isDarkMode? "border-light" : "border-secondary"}`} style={theme}>
											<u><i>Email</i></u>: {doctor.email}
										</li>
										<li className={`list-group-item ${isDarkMode? "border-light" : "border-secondary"}`} style={theme}>
											<u><i>Teléfono</i></u>: {doctor.phone}
										</li>
										<li className={`list-group-item ${isDarkMode? "border-light" : "border-secondary"}`} style={theme}>
											<u><i>Sitio web</i></u>: {doctor.website}
										</li>
									</ul>
									<div className="text-center">
										<Link to="/contact">
											<Button className="mt-4 mb-3">Agendar consulta</Button>
										</Link>
									</div>
								</div>
							</div>
						</section>
						<Button className="w-50 mt-4" onClick={() => navigate("/home")}>
							Regresar al home
						</Button>
					</div>
				</section>
			)}
		</>
	);
};

export default DetailCard;
