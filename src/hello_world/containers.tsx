import { Output, TwiceTheOutput, MyButton, Greeting } from './components';
import React from 'react';
import { View, TextInput } from 'react-native';
import * as counter from '../stores/counter';
import * as message from '../stores/message';

interface Props {
    counterInProps: counter.Store;
    messageInProps: message.Store;
    increment: (prop: counter.Store) => void;
    decrement: (prop: counter.Store) => void;
    setMessage: (message: string) => void;
}

export const MyContainer: React.SFC<Props> = (props) => {
    const { counterInProps, messageInProps, increment, decrement, setMessage } = props;
    return (
        <View style={{ alignItems: 'center' }}>
            <Greeting name='Valeera' />
            <View style={{ flexDirection: 'row', padding: 20 }}>
                <MyButton title='Increment' onPress={() => increment(counterInProps)} />
                <MyButton title='Decrement' onPress={() => decrement(counterInProps)} />
            </View>
            <Output value={counterInProps.value} />
            <TwiceTheOutput value={counterInProps.value} />
            <View>
                <TextInput value={messageInProps.message} onChangeText={(text) => setMessage(text)} />
                <Output value={messageInProps.message} />
            </View>
        </View>
    );
};
