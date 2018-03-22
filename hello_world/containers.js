import React, { Component } from 'react';
import { Alert, View, Text, TextInput, Button } from 'react-native';
import { connect } from 'react-redux';
import { Output, TwiceTheOutput, MyButton, Blink, Greeting } from './components';
import { store } from '../store';
import * as actions from './actions'

const mapValue = state => {
    return { value: state.value };
};

const mapText = state => {
    return { value: state.text };
};

const MyValueOutput = connect(mapValue)(Output);
const MyTwiceValueOutput = connect(mapValue)(TwiceTheOutput);
const MyTextOutput = connect(mapText)(Output);

export const HelloWorldContainer = () => (
    <View style={{ alignItems: 'center' }}>
        <Greeting name='Valeera' />
        <Blink text='I love to blink' />
        <View style={{ flexDirection: 'row', padding: 20 }}>
            <MyButton title='Increment' onClick={() => store.dispatch(actions.increment(store.getState().value))} />
            <MyButton title='Decrement' onClick={() => store.dispatch(actions.decrement(store.getState().value))} />
        </View>
        <MyValueOutput />
        <MyTwiceValueOutput />
        <View>
            <TextInput onChangeText={(text) => store.dispatch(actions.setText(text))} />
            <MyTextOutput />
        </View>
    </View>
);
