import { userSettingsConstants as sc } from './constants';

// example page for gettign data from api

const getUserSettings = () => ({
    type: 'API',
    payload: {
        url: `set here the url for api call`,
        onSuccess: (data) => setUserSettings(data)
    }
})

const setUserSettings = (data) => ({
    type: sc.SET_USER_SETTINGS,
    payload: {
        data
    }
})


export const userSettingsActions = {
    getUserSettings
};

