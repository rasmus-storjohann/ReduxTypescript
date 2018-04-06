import { combineReducers } from 'redux';
import * as counter from '../hello_world/counter';
import * as message from '../hello_world/message';

export interface Store {
    readonly counterInStore: counter.Store;
    readonly messageInStore: message.Store;
}

export const rootReducer = combineReducers({
    counterInStore: counter.reducer,
    messageInStore: message.reducer,
});

export type Actions = counter.Actions | message.Actions;
