import React from 'react';
import { Provider } from 'react-redux';
import { store } from './store';
import * as hello_world from './hello_world';

export default helloWorld = () => (
  <Provider store={store}>
    <hello_world.Container />
  </Provider>
);
