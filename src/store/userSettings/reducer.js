import { userSettingsConstants as sc } from './constants';

const initialState = {
	meta: {},
	filters: {}
}

export const userSettings = (state = initialState, action) => {
	switch (action.type) {
		case sc.SET_USER_META:
			// here you can do some manipulation on the data
			const filters = {};
			return Object.assign({}, state, {
				meta: action.payload.data,
				filters
			});
		default:
			return state;
	}
}

export default userSettings;