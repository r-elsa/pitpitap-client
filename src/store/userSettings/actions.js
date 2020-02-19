import { userSettingsConstants as sc } from './constants';

// example page for gettign data from api
const getUserMeta = () => ({
    type: 'API',
    payload: {
        url: `/utils/meta`,
        onSuccessActions: [setUserMeta]
    }
})

const setUserMeta = (data) => ({
    type: sc.SET_USER_META,
    payload: {
        data: data.data
    }
})


export const userSettingsActions = {
    getUserMeta
};

