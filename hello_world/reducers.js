import { combineReducers } from 'redux';
import * as constants from '../constants';
import { valueReducer } from './value';
import { textReducer } from './text';

export const rootReducer = combineReducers({
    value: valueReducer,
    text: textReducer,
});
