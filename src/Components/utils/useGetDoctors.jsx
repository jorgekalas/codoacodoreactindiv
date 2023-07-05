import { useReducer, useEffect, useMemo } from "react";

//1. Setting initial state
const initialState = {
	doctors: [],
};

//2. Reducer function
const reducer = (state, action) => {
	switch (action.type) {
		case "GET_doctorS":
			return { ...state, doctors: action.payload };
		default:
			return state;
	}
};

//3. Exportable function
const useGetDoctors = () => {
	const [state, dispatch] = useReducer(reducer, initialState);

	useEffect(() => {
		const getdoctors = async () => {
			try {
				const response = await fetch(
					"https://jsonplaceholder.typicode.com/users"
				);
				const data = await response.json();
				dispatch({ type: "GET_doctorS", payload: data });
			} catch (error) {
				console.error(error);
			}
		};

		getdoctors();
	}, []);

	const memoizeddoctors = useMemo(() => state.doctors, [state.doctors]);

	return { doctors: memoizeddoctors };
};

export default useGetDoctors;
