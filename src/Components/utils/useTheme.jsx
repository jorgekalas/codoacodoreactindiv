import { useReducer, useMemo } from "react";

//1. Setting initial state
const initialState = {
	isDarkMode: JSON.parse(localStorage.getItem("darkMode")) || false,
};

//2. Reducer function
const reducer = (state, action) => {
	switch (action.type) {
		case "TOGGLE_THEME":
			localStorage.setItem("darkMode", JSON.stringify(!state.isDarkMode));
			return { isDarkMode: !state.isDarkMode };
		default:
			return state;
	}
};

//3. Exportable function
const useTheme = () => {
	const [darkModeState, dispatch] = useReducer(reducer, initialState);

	const theme = useMemo(
		() => ({
			backgroundColor: darkModeState.isDarkMode ? "#111" : "#FFF",
			color: darkModeState.isDarkMode ? "#FFF" : "#111",
		}),
		[darkModeState.isDarkMode]
	);

	const toggleTheme = () => {
		dispatch({ type: "TOGGLE_THEME" });
	};

	const isDarkMode = darkModeState.isDarkMode;

	return { theme, toggleTheme, isDarkMode };
};

export default useTheme;
