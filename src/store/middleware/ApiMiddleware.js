import axios from 'axios';
import { uiActions } from './../ui/actions';
import { API_URL } from "../../config";

export const ApiMiddleware = ({ dispatch, getState }) => next => action => {

    next(action);

    if (action.type !== 'API') {
        return;
    }
    dispatch(uiActions.apiStart())

    const { payload } = action;
    // const state = getState();

    const options = {
        method: payload.method || 'get',
        baseURL: API_URL,
        url: payload.url,
        data: payload.data,
        headers: { 'Access-Control-Allow-Origin': '*' }
    }

    axios(options).then((res) => {
        dispatch(uiActions.apiFinish())
        let resData = res.data;
        if (payload.onSuccess) {
            payload.onSuccess.forEach(func => {
                func && dispatch(func(resData))
            })
        }
    })
        .catch(err => {
            dispatch(uiActions.apiFinish())
            console.log(err);
        });

};