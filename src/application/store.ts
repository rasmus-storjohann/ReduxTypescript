import { createStore } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { Actions, rootReducer } from './combine_stores';
export { Store } from './combine_stores';

export interface Dispatch {
    (action: Actions): void;
}

const persistConfiguration = {
    key: 'root',
    storage,
};

const persistedReducer = persistReducer(persistConfiguration, rootReducer);
export const store = createStore(persistedReducer);
export const persistor = persistStore(store);
