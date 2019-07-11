import { uiConstants as uc } from './constants';

const apiStart = () => ({
    type: uc.API_START,
})

const apiFinish = () => ({
    type: uc.API_FINISH
})

export const uiActions = {
    apiStart,
    apiFinish
};

