import { SET_MESSAGE_TEXT } from '../application/constants';

export const setMessage = (message: string) => ({
    type: SET_MESSAGE_TEXT,
    value: message,
});

export type MessageAction = ReturnType<typeof setMessage>;

export const reducer = (state: Store = new Store('default text'), action: MessageAction): Store => {
    if (action.type !== SET_MESSAGE_TEXT || action.value !== action.value) {
        return state;
    }
    return new Store(action.value);
}

export class Store {
    private _message: string;
    constructor(message: string) {
        this._message = message;
    }
    message(): string {
        return this._message;
    }
}
