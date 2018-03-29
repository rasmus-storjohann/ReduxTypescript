import { combineReducers } from 'redux';
import * as counter from '../hello_world/counter';
import * as message from '../hello_world/message';

export interface Store {
    readonly value: counter.Store;
    readonly text: message.Store;
}

export const rootReducer = combineReducers({
    value: counter.reducer,
    text: message.reducer,
});

export interface Dispatch {
    (action: counter.SetCounterAction | message.MessageAction): void;
}
