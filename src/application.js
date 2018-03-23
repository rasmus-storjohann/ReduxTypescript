import React from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { Container } from './hello_world';
import { rootReducer } from './root_reducer';

export const application = () => (
    <Provider store={createStore(rootReducer)}>
        <Container />
    </Provider>
);
