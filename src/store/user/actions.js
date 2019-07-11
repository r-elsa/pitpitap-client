import { userConstants as uc } from './constants';

const logIn = (user) => ({
	type: uc.LOGIN,
	payload: {
		...user,
		onSuccess: setUser
	}
});

const logOut = () => ({
	type: uc.LOGOUT,
	payload: {
		user: null
	}
});

const signUp = (user) => ({
	type: uc.SIGNUP,
	payload: {
		...user,
		onSuccess: setUser
	}
});

const setUser = ({ user, token }) => ({
	type: uc.SET_USER,
	data: { user, token }
});



export const userActions = {
	logIn,
	signUp,
	logOut,
};