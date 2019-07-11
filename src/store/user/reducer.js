import { userConstants as uc } from './constants';

const initialState = {
	loggedIn: false,
	localSettings: {},
	token: null,
	user: null
}

export const user = (state = initialState, action) => {
	switch (action.type) {
		case uc.SET_USER:
			return {
				loggedIn: true,
				...action.payload
			};
		case uc.LOGOUT:
			return {
				loggedIn: false,
				user: null,
			};
		default:
			return state;
	}
}

export default user;