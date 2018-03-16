import { combineReducers, createStore } from "redux";
import { helloWorldReducer } from './hello_world/reducers';

export const store = createStore(helloWorldReducer);
