import React, { Component } from 'react';
import { Alert, View, Text, TextInput, Button } from 'react-native';
import { Provider } from 'react-redux';
import { store } from './store';
import { HelloWorldContainer } from './hello_world/containers';


export default class HelloWorldApp extends Component {
  render() {
    return (
      <Provider store={store}>
        <HelloWorldContainer />
      </Provider>
    );
  }
}
