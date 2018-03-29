import { combineReducers, createStore } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import * as counter from '../hello_world/counter';
import * as message from '../hello_world/message';

export interface Store {
    readonly counterInStore: counter.Store;
    readonly messageInStore: message.Store;
}

const rootReducer = combineReducers({
    counterInStore: counter.reducer,
    messageInStore: message.reducer,
});

export interface Dispatch {
    (action: counter.SetCounterAction | message.MessageAction): void;
}

const persistConfig = {
    key: 'root',
    storage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);
export const store = createStore(persistedReducer);
export const persistor = persistStore(store);
