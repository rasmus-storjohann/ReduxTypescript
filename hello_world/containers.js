import React from 'react';
import { View, Text, TextInput, Button } from 'react-native';
import { Output, TwiceTheOutput, MyButton, Blink, Greeting } from './components';
import { connect } from 'react-redux';

const mapValueToProps = (state) => ({
    value: state.value,
});

const mapTextToProps = (state) => ({
    value: state.text,
});

const ConnectedValueOutput = connect(mapValueToProps)(Output);
const ConnectedTwiceValueOutput = connect(mapValueToProps)(TwiceTheOutput);
const ConnectedTextOutput = connect(mapTextToProps)(Output);

export const MyContainer = (props) => {
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
