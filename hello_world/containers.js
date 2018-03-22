import React, { Component } from 'react';
import { Alert, View, Text, TextInput, Button } from 'react-native';
import { connect } from 'react-redux';
import { Output, TwiceTheOutput, MyButton, Blink, Greeting } from './components';
import { store } from '../store';
import * as actions from './actions'

const mapStateToProps = state => {
    return { value: state.value };
};

const ConnectedOutput = connect(mapStateToProps)(Output);
const ConnectedTwiceTheOutput = connect(mapStateToProps)(TwiceTheOutput);

export const HelloWorldContainer = () => (
    <View style={{ alignItems: 'center' }}>
        <Greeting name='Valeera' />
        <Blink text='I love to blink' />
        <View style={{ flexDirection: 'row', padding: 20 }}>
            <MyButton title='Increment' onClick={() => store.dispatch(actions.increment(store.getState().value))} />
            <MyButton title='Decrement' onClick={() => store.dispatch(actions.decrement(store.getState().value))} />
        </View>
        <ConnectedOutput value={store.getState().value} />
        <ConnectedTwiceTheOutput value={store.getState().value} />
    </View>
);
