import { combineReducers } from 'redux';
import * as constants from './constants';

const valueReducer = (state = 0, action) => {
    if (action.value !== action.value || action.type !== constants.SET_VALUE) {
        return state;
    }
    return action.value;
};

const textReducer = (state = 'default text', action) => {
    if (action.text !== action.text || action.type !== constants.SET_TEXT) {
        return state;
    }
    return action.text;
};

export const rootReducer = combineReducers({
    value: valueReducer,
    text: textReducer,
});
