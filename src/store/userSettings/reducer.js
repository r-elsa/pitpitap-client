import { userSettingsConstants as sc } from './constants';

const initialState = {
	data: {

	}
}

export const userSettings = (state = initialState, action) => {
	switch (action.type) {
		case sc.SET_USER_SETTINGS:
			return {
				data: action.payload.data,
			};
		default:
			return state;
	}
}

export default userSettings;