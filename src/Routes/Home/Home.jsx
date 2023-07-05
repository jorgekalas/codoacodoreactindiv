import React from "react";
import Card from "../../Components/DoctorCard/DoctorCard";
import { useContext, useState, useEffect } from "react";
import { GlobalContext } from "../../Components/utils/global.context";
import Spinner from "../../Components/Spinner/Spinner";
import styles from "./Home.module.css";

const Home = () => {
	const { doctors, theme } = useContext(GlobalContext);
	const [showSpinner, setShowSpinner] = useState(true);

	useEffect(() => {
		setTimeout(() => {
			setShowSpinner(false);
		}, 2000);
	}, []);

	return (
		<section style={theme}>
			<h1 className="mt-4">Listado de profesionales</h1>
			{showSpinner ? (
				<Spinner />
			) : (
				<div className={styles.divCards}>
					{doctors.map((doctor) => (
						<div key={doctor.id} className={styles.divCard}>
							<Card {...doctor} doctor={doctor} />
						</div>
					))}
				</div>
			)}
		</section>
	);
};

export default Home;
