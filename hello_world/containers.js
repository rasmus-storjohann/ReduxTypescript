import React, { Component } from 'react';
import { Alert, View, Text, TextInput, Button } from 'react-native';
import { connect } from 'react-redux';
import { Output, TwiceTheOutput, MyButton, Blink, Greeting } from './components';
import { store } from '../store';
import * as value from './value';
import * as text from './text';

const MyValueOutput = connect(value.mapper)(Output);
const MyTwiceValueOutput = connect(value.mapper)(TwiceTheOutput);
const MyTextOutput = connect(text.mapper)(Output);

export const HelloWorldContainer = () => (
    <View style={{ alignItems: 'center' }}>
        <Greeting name='Valeera' />
        <Blink text='I love to blink' />
        <View style={{ flexDirection: 'row', padding: 20 }}>
            <MyButton title='Increment' onClick={() => store.dispatch(value.increment(store.getState().value))} />
            <MyButton title='Decrement' onClick={() => store.dispatch(value.decrement(store.getState().value))} />
        </View>
        <MyValueOutput />
        <MyTwiceValueOutput />
        <View>
            <TextInput onChangeText={(newText) => store.dispatch(text.setText(newText))} />
            <MyTextOutput />
        </View>
    </View>
);
