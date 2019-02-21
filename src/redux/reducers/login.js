import { STORE_TOKEN_REDUX } from "../actions/actionTypes";

const intialState = {
	token: null
};

const reducer = (state = intialState, action) => {
	switch (action.type) {
		case STORE_TOKEN_REDUX:
			return {
				...state,
				token: action.payload
			};

		default:
			return state;
	}
};

export default reducer;
