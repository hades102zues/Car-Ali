import {
	STORE_TOKEN_REDUX,
	STORE_TOKEN_BROWSER,
	SIGN_UP_USER
} from "./actionTypes";

export const storeTokenRedux = token => {
	return {
		type: STORE_TOKEN_REDUX,
		payload: token
	};
};

const storeTokenBrowser = token => {
	//store locally
};

export const signupUser = userData => dispatch => {
	fetch("/signup", {
		method: "POST",
		headers: { "Content-Type": "application/json" },
		body: JSON.stringify(userData)
	})
		.then(res => res.json())
		.then(data => {
			dispatch(storeTokenBrowser(data.token));
			dispatch(storeTokenRedux(data.token));
		})
		.catch(err => console.log("signupuser", err));
};
