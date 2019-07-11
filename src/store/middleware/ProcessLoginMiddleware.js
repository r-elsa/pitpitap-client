import axios from 'axios';
import { userConstants as uc } from './../user/constants';
import { API_URL } from "../../config";

// handle the login proccess
export const ProcessLoginMiddleware = ({ dispatch }) => next => action => {
    
    if (action.type !== uc.LOGIN) {
        return next(action);
    }

    const { email, password, onSuccess } = action.payload;
    const resData = {
        user: {
            email,
            password
        },
        token: '123'
    }
    // just for checking..
    if (password === '123') {

        onSuccess && dispatch(onSuccess(resData))
    }
};