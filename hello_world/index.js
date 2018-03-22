import React, { Component } from 'react';
import { Alert, View, Text, TextInput, Button } from 'react-native';
import { connect } from 'react-redux';
import { Output, TwiceTheOutput, MyButton, Blink, Greeting } from './components';
import { store } from '../store';
import * as value from './value';
import * as text from './text';

const MyContainer = (props) => {
    const { value, incrementThis, decrementThis, changeThis } = props;
    return (
        <View style={{ alignItems: 'center' }}>
            <Greeting name='Valeera' />
            <Blink text='I love to blink' />
            <View style={{ flexDirection: 'row', padding: 20 }}>
                <MyButton title='Increment' onPress={() => incrementThis(value)} />
                <MyButton title='Decrement' onPress={() => decrementThis(value)} />
            </View>
            <ConnectedValueOutput />
            <ConnectedTwiceValueOutput />
            <View>
                <TextInput onChangeText={(newText) => changeThis(newText)} />
                <ConnectedTextOutput />
            </View>
        </View>
    );
};

const mapValueToProps = (state) => ({
    value: state.value
});

const mapTextToProps = (state) => ({
    value: state.text
});

const mapDispatchToProps = (dispatch) => {
    return {
        incrementThis: (newValue) => dispatch(value.increment(newValue)),
        decrementThis: (newValue) => dispatch(value.decrement(newValue)),
        changeThis: (newText) => dispatch(text.setText(newText)),
    };
};

const ConnectedValueOutput = connect(mapValueToProps)(Output);
const ConnectedTwiceValueOutput = connect(mapValueToProps)(TwiceTheOutput);
const ConnectedTextOutput = connect(mapTextToProps)(Output);
const ConnectedContainer = connect(mapValueToProps, mapDispatchToProps)(MyContainer);

export const Container = ConnectedContainer;
