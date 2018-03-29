import { Output, TwiceTheOutput, MyButton, Greeting } from './components';
import React from 'react';
import { View, TextInput } from 'react-native';
import * as counter from './counter';
import * as message from './message';

interface Props {
    value: counter.Store;
    text: message.Store;
    increment: (prop: counter.Store) => void;
    decrement: (prop: counter.Store) => void;
    setMessage: (message: string) => void;
}

export const MyContainer: React.SFC<Props> = (props) => {
    const { value, text, increment, decrement, setMessage } = props;
    return (
        <View style={{ alignItems: 'center' }}>
            <Greeting name='Valeera' />
            <View style={{ flexDirection: 'row', padding: 20 }}>
                <MyButton title='Increment' onPress={() => increment(value)} />
                <MyButton title='Decrement' onPress={() => decrement(value)} />
            </View>
            <Output value={value.value} />
            <TwiceTheOutput value={value.value} />
            <View>
                <TextInput value={text.message} onChangeText={(newText) => setMessage(newText)} />
                <Output value={text.message} />
            </View>
        </View>
    );
};
