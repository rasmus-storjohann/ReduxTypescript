import { Output, TwiceTheOutput, MyButton, Blink, Greeting } from './components';

import React from 'react';
import { View, TextInput } from 'react-native';
import { connect } from 'react-redux';

export const MyContainer = (props) => {
    const { value, text, incrementThis, decrementThis, changeThis } = props;
    return (
        <View style={{ alignItems: 'center' }}>
            <Greeting name='Valeera' />
            <Blink text='I love to blink' />
            <View style={{ flexDirection: 'row', padding: 20 }}>
                <MyButton title='Increment' onPress={() => incrementThis(value)} />
                <MyButton title='Decrement' onPress={() => decrementThis(value)} />
            </View>
            <Output value={value} />
            <TwiceTheOutput value={value} />
            <View>
                <TextInput value={text} onChangeText={(newText) => changeThis(newText)} />
                <Output value={text} />
            </View>
        </View>
    );
};
