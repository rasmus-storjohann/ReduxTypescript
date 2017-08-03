import React, { Component } from 'react';
import { Alert, View, Text, TextInput, Button } from 'react-native';

class Greeting extends Component {
  render() {
    return (
      <Text>Hello {this.props.name}!</Text>
    );
  }
}

class Blink extends Component {
  constructor(props) {
    super(props);
    this.state = { isShowingText: true };

    setInterval(() => {
      this.setState(previousState => {
        return { isShowingText: !previousState.isShowingText };
      });
    }, 1000);
  }

  render() {
    let display = this.state.isShowingText ? this.props.text : ' ';
    return (
      <Text>{display}</Text>
    );
  }
}

class MyButton extends Component {
  render() {
    return (
      <Button onPress={this.props.onClick} title={this.props.title} />
    );
  }
}

class Output extends Component {
  render() {
    return (
      <Text>The value is {this.props.value}</Text>
    );
  }
}

class TwiceTheOutput extends Component {
  render() {
    return (
      <Text>The value is {2 * this.props.value}</Text>
    );
  }
}

export default class HelloWorldApp extends Component {
  constructor(props) {
    super(props)
    this.state = {
      value: 0,
    };
  }
  render() {
    return (
      <View style={{ alignItems: 'center' }}>
        <Greeting name='Valeera' />
        <Blink text='I love to blink' />
        <View style={{
          flexDirection: 'row',
          padding: 20,
        }}>
          <MyButton title='Make it four' onClick={() => this.setState({ value: 4 })} />
          <MyButton title='Make it two' onClick={() => this.setState({ value: 2 })} />
        </View>
        <Output value={this.state.value} />
        <TwiceTheOutput value={this.state.value} />
      </View>
    );
  }
}
