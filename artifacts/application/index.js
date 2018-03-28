import React from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import Container from '../hello_world';
import { rootReducer } from './store';
export const Application = () => (React.createElement(Provider, { store: createStore(rootReducer) },
    React.createElement(Container, null)));
//# sourceMappingURL=index.js.map