import React from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { Container } from './src/hello_world';
import { rootReducer } from './src/root_reducer';

export default helloWorld = () => (
  <Provider store={createStore(rootReducer)}>
    <Container />
  </Provider>
);
