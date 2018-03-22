import { combineReducers } from 'redux';
import * as value from './hello_world/value';
import * as text from './hello_world/text';

export const rootReducer = combineReducers({
    value: value.reducer,
    text: text.reducer,
});
