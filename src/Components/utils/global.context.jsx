import { createContext } from "react";
import useFavoriteDoctors from "./useFavoriteDoctors";
import useGetDoctors from "./useGetDoctors";
import useTheme from "./useTheme";

export const GlobalContext = createContext(undefined);

const GlobalContextProvider = ({ children }) => {
	//1. API consuming
	const { doctors } = useGetDoctors();

	//2. Favorites

	const {
		favsState,
		addFavoriteDoctor,
		removeFavoriteDoctor,
		removeAllDoctors,
	} = useFavoriteDoctors();

	//3. Themes

	const { theme, toggleTheme, isDarkMode } = useTheme();

	return (
		<GlobalContext.Provider
			value={{
				doctors,
				favsState,
				addFavoriteDoctor,
				removeFavoriteDoctor,
				removeAllDoctors,
				theme,
				toggleTheme,
				isDarkMode,
			}}
		>
			{children}
		</GlobalContext.Provider>
	);
};

export default GlobalContextProvider;
