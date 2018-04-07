import React, { Component } from 'react';
import { Text, Button } from 'react-native';

interface OutputProp {
    value: number | string;
}

export const Output: React.SFC<OutputProp> = ({ value }) => (
    <Text>The value is {value}</Text>
);

interface TwiceTheOutputProp {
    value: number;
}

export const TwiceTheOutput: React.SFC<TwiceTheOutputProp> = ({ value }) => (
    <Text>The double value is {2 * value}</Text>
);

interface MyButtonProp {
    onPress: () => any,
    title: string,
}

export const MyButton: React.SFC<MyButtonProp> = ({ onPress, title }) => (
    <Button onPress={onPress} title={title} />
);

interface GreetingProp {
    name: string;
}
export const Greeting: React.SFC<GreetingProp> = ({ name }) => (
    <Text>Hello {name}!</Text>
);

interface BlinkProps {
    text: string;
}

interface BlinkState {
    isShowingText: boolean;
}

export class Blink extends Component<BlinkProps, BlinkState> {
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
