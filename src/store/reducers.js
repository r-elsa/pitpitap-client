import { combineReducers } from 'redux';
import { user } from './user/reducer';
import { ui } from './ui/reducer';
import { userSettings } from './userSettings/reducer';

const rootReducer = combineReducers({
    user,
    ui,
    userSettings
})

export default rootReducer;