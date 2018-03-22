import { combineReducers, createStore } from 'redux';
import { rootReducer } from './root_reducer';

export const store = createStore(rootReducer);
