import { uiConstants as uc } from './constants';

const initialState = {
	pendingRequests: 0,
	activeRoute: 'about',
}

export const ui = (state = initialState, action) => {
	switch (action.type) {
		case uc.API_START:
			return Object.assign({}, state, {
				pendingRequests: state.pendingRequests + 1
			});
		case uc.API_FINISH:
			return Object.assign({}, state, {
				pendingRequests: state.pendingRequests - 1
			});
		case uc.SET_ACTIVE_ROUTE:
			return Object.assign({}, state, {
				activeRoute: action.payload.route
			});
		default:
			return state;
	}
}

export default ui;