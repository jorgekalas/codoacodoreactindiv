import React from "react";
import Card from "../../Components/DoctorCard/DoctorCard";
import { GlobalContext } from "../../Components/utils/global.context";
import { useContext } from "react";
import styles from "./Favs.module.css";
import Button from "react-bootstrap/Button";
import { useNavigate } from "react-router-dom";
import { ToastContainer } from "react-toastify";

const Favs = () => {
	const { favsState, removeAllDoctors } = useContext(GlobalContext);
	const navigate = useNavigate();

	return (
		<>
			<section>
				<ToastContainer />
				<h1 className="mt-4">Doctores favoritos</h1>
				<div>
					{favsState.favoritedoctors.length > 0 ? (
						<div className="d-flex flex-column align-items-center">
							<Button
								className="w-50 mt-4 mb-4 p-2"
								onClick={() => removeAllDoctors()}
							>
								Remover todos los favoritos
							</Button>
							<div className={styles.divCardsFav}>
								{favsState.favoritedoctors.map((doctor) => (
									<div key={doctor.id}>
										<Card {...doctor} doctor={doctor} />
									</div>
								))}
							</div>
						</div>
					) : (
						<div className={styles.divNoFavs}>
							<h3 className="p-2">Aún no se han agregado favoritos</h3>
							<Button onClick={() => navigate("/home")} className="w-50 mt-4">
								Volver al home
							</Button>
						</div>
					)}
				</div>
			</section>
		</>
	);
};

export default Favs;
