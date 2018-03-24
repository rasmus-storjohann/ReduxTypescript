import { combineReducers } from 'redux';
import * as hello_world from '../hello_world/models';

export interface Store {
    value: hello_world.Counter;
    text: hello_world.Message;
}

export const rootReducer = combineReducers({
    value: hello_world.Counter.reducer,
    text: hello_world.Message.reducer,
});

export interface Dispatch {
    (action: hello_world.CounterAction | hello_world.MessageAction): any;
}
