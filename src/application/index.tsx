import React from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import Container from '../hello_world';
import { rootReducer } from './store';

import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { PersistGate } from 'redux-persist/integration/react';

const persistConfig = {
    key: 'root',
    storage,
}

const persistedReducer = persistReducer(persistConfig, rootReducer);
const store = createStore(persistedReducer)
const persistor = persistStore(store)

export const Application = () => (
    <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
            <Container />
        </PersistGate>
    </Provider>
);
