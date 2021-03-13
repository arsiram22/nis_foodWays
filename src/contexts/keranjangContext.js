import { createContext, useReducer } from "react";

export const KeranjangContext = createContext();

const initialState = {};

export const reducer = (state, { type, payload }) => {
	switch (type) {
		case "ADD_CART":
			// return { ...state, ...payload ,

			// };
			return console.log("dari contect");

		default:
			return state;
	}
};

export const KeranjangContextProvider = ({ children }) => {
	const [state, dispatch] = useReducer(reducer, initialState);

	return (
		<>
			<KeranjangContext.Provider value={[state, dispatch]}>
				{children}
			</KeranjangContext.Provider>
		</>
	);
};
