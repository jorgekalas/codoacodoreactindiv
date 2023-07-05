import { useReducer, useEffect } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

//1. Setting initial state as the gotten item from Storage, or an empty array if Storage is empty

const initialState = {
	favoritedoctors: JSON.parse(localStorage.getItem("favoritedoctors")) || [],
};

//2. Toast notifications: added - removed - all Removed

const notifyAdded = () => {
	toast.info("⭐ Agregado a favoritos", {
		position: "top-right",
		autoClose: 2000,
		hideProgressBar: true,
		closeOnClick: false,
		pauseOnHover: false,
		draggable: false,
		progress: undefined,
		theme: "colored",
		className: "toastMessage",
	});
};

const notifyRemoved = () => {
	toast.info("❌ Removido de favoritos", {
		position: "top-right",
		autoClose: 2000,
		hideProgressBar: true,
		closeOnClick: false,
		pauseOnHover: false,
		draggable: false,
		progress: undefined,
		theme: "colored",
		className: "toastMessage",
	});
};

const notifyAllRemoved = () => {
	toast.info("✨ Todos los favoritos han sido removidos", {
		position: "top-right",
		autoClose: 2000,
		hideProgressBar: true,
		closeOnClick: false,
		pauseOnHover: false,
		draggable: false,
		progress: undefined,
		theme: "colored",
		className: "toastMessage",
	});
};

//3. Reducer function (3 cases: add, remove, remove all)

const reducer = (favsState, action) => {
	switch (action.type) {
		case "ADD_FAVORITE":
			const newFavoritedoctors = [...favsState.favoritedoctors, action.payload];
			localStorage.setItem(
				"favoritedoctors",
				JSON.stringify(newFavoritedoctors)
			);
			notifyAdded();
			return { ...favsState, favoritedoctors: newFavoritedoctors };
		case "REMOVE_FAVORITE":
			const filteredFavoritedoctors = favsState.favoritedoctors.filter(
				(doctor) => doctor.id !== action.payload.id
			);
			localStorage.setItem(
				"favoritedoctors",
				JSON.stringify(filteredFavoritedoctors)
			);
			notifyRemoved();
			return { ...favsState, favoritedoctors: filteredFavoritedoctors };
		case "REMOVE_ALL_doctorS":
			const emptyArray = [];
			localStorage.setItem("favoritedoctors", JSON.stringify);
			notifyAllRemoved();
			return { ...favsState, favoritedoctors: emptyArray };
		default:
			return favsState;
	}
};

//4. Exportable function

const useFavoriteDoctors = () => {
	const [favsState, dispatch] = useReducer(reducer, initialState);

	useEffect(() => {
		//3.a Saves the favorite doctors to localStorage whenever the state changes
		localStorage.setItem(
			"favoritedoctors",
			JSON.stringify(favsState.favoritedoctors)
		);
	}, [favsState.favoritedoctors]);

	//3.b Functionalities to be exported
	const addFavoriteDoctor = (doctor) =>
		dispatch({ type: "ADD_FAVORITE", payload: doctor });
	const removeFavoriteDoctor = (doctor) =>
		dispatch({ type: "REMOVE_FAVORITE", payload: doctor });
	const removeAllDoctors = () => dispatch({ type: "REMOVE_ALL_doctorS" });

	return {
		favsState,
		addFavoriteDoctor,
		removeFavoriteDoctor,
		removeAllDoctors,
	};
};

export default useFavoriteDoctors;
