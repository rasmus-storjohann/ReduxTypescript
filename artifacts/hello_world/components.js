import React, { Component } from 'react';
import { Text, Button } from 'react-native';
export const Output = ({ value }) => (React.createElement(Text, null,
    "The value is ",
    value));
export const TwiceTheOutput = ({ value }) => (React.createElement(Text, null,
    "The double value is ",
    2 * value));
export const MyButton = ({ onPress, title }) => (React.createElement(Button, { onPress: onPress, title: title }));
export const Greeting = ({ name }) => (React.createElement(Text, null,
    "Hello ",
    name,
    "!"));
export class Blink extends Component {
    constructor(props) {
        super(props);
        this.state = { isShowingText: true };
        setInterval(() => {
            this.setState((previousState) => {
                return { isShowingText: !previousState.isShowingText };
            });
        }, 100);
    }
    render() {
        let display = this.state.isShowingText ? this.props.text : ' ';
        return (React.createElement(Text, null, display));
    }
}
//# sourceMappingURL=components.js.map