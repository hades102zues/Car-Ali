import {
	STORE_TOKEN_REDUX,
	STORE_TOKEN_BROWSER,
	SIGN_UP_USER
} from "./actionTypes";

export const storeTokenRedux = (token, message) => {
	return {
		type: STORE_TOKEN_REDUX,
		token,
		message
	};
};

const storeTokenBrowser = token => {
	//store locally
	localStorage.setItem("userToken", token);
};

const getTokenBrowser = () => {
	return localStorage.getItem("userToken");
};

const removeTokenBrowser = () => {
	localStorage.removeItem("userToken");
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
