import { createContext, useReducer } from "react";

export const AuthContext = createContext();

const initialState = {
	modalLogin: false,
	modalRegister: false,
	isLogin: false,
	user: null,
};

export const reducer = (state, { type, payload }) => {
	console.log("dari context Auth :", type);
	switch (type) {
		case "MODAL_LOGIN_OPEN":
			return {
				...state,
				modalLogin: true,
			};
		case "MODAL_LOGIN_CLOSE":
			return {
				...state,
				modalLogin: false,
			};
		case "MODAL_REGISTER_OPEN":
			// console.log("ok");
			return {
				...state,
				modalRegister: true,
			};
		case "MODAL_REGISTER_CLOSE":
			return {
				...state,
				modalRegister: false,
			};
		default:
			return state;
	}
};

export const AuthContextProvaider = ({ children }) => {
	const [state, dispatch] = useReducer(reducer, initialState);
	return (
		<AuthContext.Provider value={[state, dispatch]}>
			{children}
		</AuthContext.Provider>
	);
};
