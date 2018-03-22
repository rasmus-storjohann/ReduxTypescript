import React, { Component } from 'react';
import { Alert, View, Text, TextInput, Button } from 'react-native';

export const Output = ({ value }) => (
    <Text>The value is {value}</Text>
);

export const TwiceTheOutput = ({ value }) => (
    <Text>The double value is {2 * value}</Text>
);

export const MyButton = ({ onPress, title }) => (
    <Button onPress={onPress} title={title} />
);

export const Greeting = ({ name }) => (
    <Text>Hello {name}!</Text>
);

export class Blink extends Component {
    constructor(props) {
        super(props);
        this.state = { isShowingText: true };
        setInterval(() => {
            this.setState(previousState => {
                return { isShowingText: !previousState.isShowingText };
            });
        }, 100);
    }

    render() {
        let display = this.state.isShowingText ? this.props.text : ' ';
        return (
            <Text>{display}</Text>
        );
    }
}
