import React from 'react';
import { View, Text } from 'react-native';

interface Props {
};

interface State {
    error?: Error,
    errorInfo?: React.ErrorInfo
};

export class ErrorBoundary extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props);
        this.state = {
            error: null,
            errorInfo: null
        };
    }

    componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
        this.setState({
            error: error,
            errorInfo: errorInfo
        });
    }

    render(): React.ReactNode {
        return this.state.error ? this.renderOnError() : this.renderOnOk();
    }

    renderOnError(): React.ReactNode {
        return (
            <View>
                <Text>{"Oh-no! Something went wrong"}</Text>
                <Text>{this.state.error && this.state.error.toString()}</Text>
            </View>
        );
    }

    renderOnOk(): React.ReactNode {
        return this.props.children;
    }
}
