import axios from 'axios';
import { uiActions } from './../ui/actions';
import config from "../../config";


// This middleware is taking care for all the API calls that goes from the app
export const ApiMiddleware = ({ dispatch, getState }) => next => action => {

    // we call next on top for doing the call async. 
    next(action);
    if (action.type !== 'API') {
        return;
    }
    // in case you don't want to set the loader while the request is being proccessed
    if (!action.payload.disableLoading) {
        dispatch(uiActions.apiStart())
    }

    const state = getState();
    const { payload } = action;
    const token = state.user.token || action.payload.token;

    const options = {
        method: payload.method || 'get',
        baseURL: payload.baseURL || config.API_URL,
        url: payload.url,
        data: payload.data,
        params: payload.data,
        headers: { 'Access-Control-Allow-Origin': '*', 'X-auth-token': token }
    }

    // onSuccessActions ( Array ) -  here you wirte all the actions you want to do run after the request returned from the server
    // onError ( Func ) - here you can pass a funtction for handling code to work if the request returned with error
    // afterSuccess ( Func ) - here you can pass a function for handling code to work after the request and all the actions are processed.
    // NOTE - its better to use the onSuccessAction instead the aftersuccess and to run only actions,
    // only if you need the callback will do something specepic in the component you can use the afterSuccess

    axios(options).then((res) => {
        dispatch(uiActions.apiFinish());

        let resData = res.data.data;
        if (payload.onSuccessActions) {
            payload.onSuccessActions.forEach(func => {
                func && dispatch(func({ data: resData, ...res.headers }));
            })
        }
        if (payload.afterSuccess) {
            payload.afterSuccess(resData);
        }
    })
        .catch(err => {
            dispatch(uiActions.apiFinish())
            if (payload.onError) {
                payload.onError(err);
            }
            console.log(err);
        });

};