import { combineReducers, createStore } from "redux";
import { rootReducer } from './hello_world/reducers';

export const store = createStore(rootReducer);
