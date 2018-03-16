import React, { Component } from 'react';
import { Alert, View, Text, TextInput, Button } from 'react-native';
import { Provider, connect } from 'react-redux';

import { Output, TwiceTheOutput, MyButton, Blink, Greeting } from './components';
import * as actions from './actions'
import { store } from './store';

const mapStateToProps = state => {
  return { value: state.value };
};

const ConnectedOutput = connect(mapStateToProps)(Output);
const ConnectedTwiceTheOutput = connect(mapStateToProps)(TwiceTheOutput);

export default class HelloWorldApp extends Component {
  constructor(props) {
    super(props)
    this.state = {
      value: 0,
    };
  }
  render() {
    return (
      <Provider store={store}>
        <View style={{ alignItems: 'center' }}>
          <Greeting name='Valeera' />
          <Blink text='I love to blink' />
          <View style={{ flexDirection: 'row', padding: 20 }}>
            <MyButton title='Make it four' onClick={() => store.dispatch(actions.setValueToFour())} />
            <MyButton title='Make it two' onClick={() => store.dispatch(actions.setValueTo(2))} />
          </View>
          <ConnectedOutput value={store.getState().value} />
          <ConnectedTwiceTheOutput value={store.getState().value} />
        </View>
      </Provider>
    );
  }
}
