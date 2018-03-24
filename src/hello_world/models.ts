export interface CounterAction {
    type: string;
    value: number;
}

export class Counter {

    private static SET_VALUE = 'counter: set value';

    private _counterValue: number;

    static reducer(state: Counter = new Counter(0), action: CounterAction): Counter {
        if (action.value !== action.value || action.type !== Counter.SET_VALUE) {
            return state;
        }
        return new Counter(action.value);
    }

    constructor(counterValue: number) {
        this._counterValue = counterValue;
    }

    getValue(): number {
        return this._counterValue;
    }

    incrementAction(): CounterAction {
        return {
            type: Counter.SET_VALUE,
            value: this._counterValue + 1,
        };
    }

    decrementAction(): CounterAction {
        return {
            type: Counter.SET_VALUE,
            value: this._counterValue - 1,
        };
    }
}

export interface MessageAction {
    type: string;
    value: string;
}

export class Message {

    private static SET_TEXT = 'message:set text';

    private _message: string;

    static reducer(state: Message = new Message('default text'), action: MessageAction): Message {
        if (action.type !== Message.SET_TEXT || action.value !== action.value) {
            return state;
        }
        return new Message(action.value);
    }

    constructor(message: string) {
        this._message = message;
    }

    getMessage(): string {
        return this._message;
    }

    setMessageAction(message: string): MessageAction {
        return {
            type: Message.SET_TEXT,
            value: message,
        };
    }
}
