const SET_VALUE = 'HELLO WORLD: SET VALUE';

export class Counter {

    static reducer(state = new Counter(0), action) {
        if (action.value !== action.value || action.type !== SET_VALUE) {
            return state;
        }
        return new Counter(action.value);
    };

    constructor(counterValue) {
        this._counterValue = counterValue;
    }

    getValue = () => this._counterValue;

    increment = () => ({
        type: SET_VALUE,
        value: this._counterValue + 1,
    });

    decrement = () => ({
        type: SET_VALUE,
        value: this._counterValue - 1,
    });
};

const SET_TEXT = 'HELLO WORLD: SET TEXT';

export class Message {

    static reducer(state = new Message('default text'), action) {
        if (action.type !== SET_TEXT || action.value !== action.value) {
            return state;
        }
        return new Message(action.value);
    };

    constructor(message) {
        this._message = message;
    }

    getMessage = () => this._message;

    setMessage = (message) => ({
        type: SET_TEXT,
        value: message,
    });
}
