import React, { Component } from 'react';
import { Text, Button } from 'react-native';

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


interface BlinkState {
    isShowingText: boolean;
}


interface BlinkProps {
    text: string;
}


export class Blink extends Component {
    state: BlinkState;
    props: BlinkProps;

    constructor(props: BlinkProps) {
        super(props);
        this.state = { isShowingText: true };
        setInterval(() => {
            this.setState((previousState: BlinkState) => {
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
