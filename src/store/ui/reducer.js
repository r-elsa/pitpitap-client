import { uiConstants as uc } from './constants';

const initialState = {
	pendingRequests: 0
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
		default:
			return state;
	}
}

export default ui;