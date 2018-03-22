import { combineReducers } from 'redux';
import * as constants from './constants';
import { valueReducer } from './hello_world/value';
import { textReducer } from './hello_world/text';

export const rootReducer = combineReducers({
    value: valueReducer,
    text: textReducer,
});
