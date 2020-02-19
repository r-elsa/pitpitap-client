import { userConstants as uc } from './../user/constants';

// handle the login proccess
export const ProcessLoginMiddleware = ({ dispatch }) => next => action => {
    if (action.type !== uc.LOGIN) {
        return next(action);
    }

    const { id, token, client, onSuccessActions } = action.payload;

    if (token) {
        if (onSuccessActions) {
            onSuccessActions.forEach(func => {
                func && dispatch(func({ id, token, client }))
            })
        }
    }
};