import { Output, TwiceTheOutput, MyButton, Blink, Greeting } from './components';
import React from 'react';
import { View, TextInput } from 'react-native';
export const MyContainer = (props) => {
    const { value, text, increment, decrement, setMessage } = props;
    return (React.createElement(View, { style: { alignItems: 'center' } },
        React.createElement(Greeting, { name: 'Valeera' }),
        React.createElement(Blink, { text: 'I love to blink' }),
        React.createElement(View, { style: { flexDirection: 'row', padding: 20 } },
            React.createElement(MyButton, { title: 'Increment', onPress: () => increment(value) }),
            React.createElement(MyButton, { title: 'Decrement', onPress: () => decrement(value) })),
        React.createElement(Output, { value: value.value() }),
        React.createElement(TwiceTheOutput, { value: value.value() }),
        React.createElement(View, null,
            React.createElement(TextInput, { value: text.message(), onChangeText: (newText) => setMessage(newText) }),
            React.createElement(Output, { value: text.message() }))));
};
//# sourceMappingURL=containers.js.map