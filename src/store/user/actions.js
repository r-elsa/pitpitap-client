import { userConstants as uc } from './constants';

const logIn = (token) => ({
	type: 'API',
	payload: {
		url: '/users/me',
		method: 'GET',
		token,
		onSuccessActions: [(data) => setUser({ ...data, ...data.data })],
	}
});

const logOut = () => ({
	type: uc.LOGOUT,
	saveToLocal: true,
	payload: {
		itemName: 'localUser',
		data: {}
	}
});

const sendCodeToUser = (phone) => ({
	type: 'API',
	payload: {
		url: '/auth/login',
		method: 'POST',
		data: {
			phone
		}
	}
})

const validateCode = (phone, code, onError) => ({
	type: 'API',
	payload: {
		url: '/auth/validate_code',
		method: 'POST',
		onSuccessActions: [(data) => setUser({ ...data, ...data.data })],
		onError,
		data: { phone, code }
	}
})

const registerUser = (code, onError) => ({
	type: 'API',
	payload: {
		url: '/auth/register',
		method: 'POST',
		onSuccessActions: [setClient],
		onError,
		data: {
			client_code: code
		}
	}
})

const setClient = (data) => ({
	type: uc.SET_USER,
	payload: {
		client: data.data.client,
		id: data.data.id
	}
})


const setUser = (data) => ({
	type: uc.SET_USER,
	saveToLocal: true,
	payload: {
		itemName: 'localUser',
		id: data.id,
		token: data.token || data['x-auth-token'],
		client: data.client
	}
});


export const userActions = {
	logIn,
	logOut,
	sendCodeToUser,
	validateCode,
	registerUser,
};