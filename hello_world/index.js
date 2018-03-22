import React, { Component } from 'react';
import { Alert, View, Text, TextInput, Button } from 'react-native';
import { connect } from 'react-redux';
import { Output, TwiceTheOutput, MyButton, Blink, Greeting } from './components';
import { store } from '../store';
import * as value from './value';
import * as text from './text';

const ContainerBla = (props) => {
    const { value, incrementThis, decrementThis } = props;
    return (
        <View style={{ alignItems: 'center' }}>
            <Greeting name='Valeera' />
            <Blink text='I love to blink' />
            <View style={{ flexDirection: 'row', padding: 20 }}>
                <MyButton title='Increment' onPress={() => incrementThis(value)} />
                <MyButton title='Decrement' onPress={() => decrementThis(value)} />
            </View>
            <MyValueOutput />
            <MyTwiceValueOutput />
            <View>
                <TextInput onChangeText={(newText) => store.dispatch(text.setText(newText))} />
                <MyTextOutput />
            </View>
        </View>
    );
};

const MyValueOutput = connect(value.mapValueToProps)(Output);
const MyTwiceValueOutput = connect(value.mapValueToProps)(TwiceTheOutput);
const MyTextOutput = connect(text.mapTextToProps)(Output);

const mapDispatchToProps = (dispatch) => {
    return {
        incrementThis: (newValue) => dispatch(value.increment(newValue)),
        decrementThis: (newValue) => dispatch(value.decrement(newValue)),
    };
};

export const Container = connect(value.mapValueToProps, mapDispatchToProps)(ContainerBla);
