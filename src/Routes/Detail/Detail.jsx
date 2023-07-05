import React, { useContext, useEffect, useState } from "react";
import DetailCard from "../../Components/DetailCard/DetailCard";
import { useParams } from "react-router-dom";
import ErrorComponent from "../../Components/ErrorComponent/ErrorComponent";
import { GlobalContext } from "../../Components/utils/global.context";
import Spinner from "../../Components/Spinner/Spinner";

const Detail = () => {
	const { doctors } = useContext(GlobalContext);
	const [showSpinner, setShowSpinner] = useState(true);

	let param = useParams();
	let idParam = parseInt(param.id);

	const isValidParam = () => {
		return idParam <= doctors.length;
	};

	useEffect(() => {
		setTimeout(() => {
			setShowSpinner(false);
		}, 1000);
	}, []);

	return (
		<div className="d-flex justify-content-center">
			{showSpinner ? (
				<Spinner />
			) : (
				<>{isValidParam() ? <DetailCard /> : <ErrorComponent />}</>
			)}
		</div>
	);
};

export default Detail;
