import { userConstants as uc } from './constants';

const initialState = {
	id: null,
	token: '',
	client: {}
}

export const user = (state = initialState, action) => {
	switch (action.type) {
		case uc.SET_USER:
			return {
				...action.payload,
				client: action.payload.client || {},
			};
		case uc.LOGOUT:
			return initialState;
		default:
			return state;
	}
}

export default user;