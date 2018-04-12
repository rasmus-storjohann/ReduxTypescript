import { createStore } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { rootReducer } from '../stores';
export { Store } from '../stores';

const persistConfiguration = {
    key: 'root',
    storage,
};

const persistedReducer = persistReducer(persistConfiguration, rootReducer);
export const store = createStore(persistedReducer);
export const persistor = persistStore(store);
