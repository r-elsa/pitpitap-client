import { uiConstants as uc } from './constants';

// this function is called automatically after every api call 
const apiStart = () => ({
    type: uc.API_START,
})

// this function is called automatically after the api answer returned
const apiFinish = () => ({
    type: uc.API_FINISH
})

// call this function from every part of the app to change the active route
const setActiveRoute = (route) => ({
    type: uc.SET_ACTIVE_ROUTE,
    payload: {
        route
    }
})

export const uiActions = {
    apiStart,
    apiFinish,
    setActiveRoute
};

