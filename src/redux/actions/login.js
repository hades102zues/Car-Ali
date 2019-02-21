import { STORE_TOKEN_REDUX } from "./actionTypes";

const storeTokenBrowser = token => {
	localStorage.setItem("userToken", token);
};

const getTokenBrowser = () => {
	return localStorage.getItem("userToken");
};

const removeTokenBrowser = () => {
	localStorage.removeItem("userToken");
};

export const clearLogin = () => {
	removeTokenBrowser();
	return storeTokenRedux(null, null);
};

export const storeTokenRedux = (token, message) => {
	return {
		type: STORE_TOKEN_REDUX,
		token,
		message
	};
};

export const grabTokenFromLocal = () => {
	const token = getTokenBrowser();
	const message = "Token Retrieved From Local";
	return storeTokenRedux(token, message);
};

export const signupUser = (userData, shouldSignUp) => dispatch => {
	const path = shouldSignUp ? "/signup" : "/login";

	fetch(path, {
		method: "POST",
		headers: { "Content-Type": "application/json" },
		body: JSON.stringify(userData)
	})
		.then(res => res.json())
		.then(data => {
			storeTokenBrowser(data.token);
			dispatch(storeTokenRedux(data.token, data.message));
		})
		.catch(err => console.log("signupuser", err));
};
