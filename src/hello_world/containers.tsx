import { Output, TwiceTheOutput, MyButton, Blink, Greeting } from './components';
import React from 'react';
import { View, TextInput } from 'react-native';
import { Counter, Message } from './models';

interface Props {
    value: Counter;
    text: Message;
    increment: (prop: Counter) => any;
    decrement: (prop: Counter) => any;
    setMessage: (prop: Message, message: string) => any;
}

export const MyContainer: React.SFC<Props> = (props: Props) => {
    const { value, text, increment, decrement, setMessage } = props;
    return (
        <View style={{ alignItems: 'center' }}>
            <Greeting name='Valeera' />
            <Blink text='I love to blink' />
            <View style={{ flexDirection: 'row', padding: 20 }}>
                <MyButton title='Increment' onPress={() => increment(value)} />
                <MyButton title='Decrement' onPress={() => decrement(value)} />
            </View>
            <Output value={value.getValue()} />
            <TwiceTheOutput value={value.getValue()} />
            <View>
                <TextInput value={text.getMessage()} onChangeText={(newText) => setMessage(text, newText)} />
                <Output value={text.getMessage()} />
            </View>
        </View>
    );
};
