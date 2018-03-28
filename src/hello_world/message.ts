import { SET_MESSAGE_TEXT } from '../application/constants';

export const setMessage = (message: string) => ({
    type: SET_MESSAGE_TEXT,
    payload: message,
});

export type MessageAction = ReturnType<typeof setMessage>;

const isValid = (action: MessageAction): boolean => action.payload === action.payload;

export const reducer = (state: Store = new Store('default text'), action: MessageAction): Store => {
    if (!isValid(action)) {
        return state;
    }
    switch (action.type) {
        case SET_MESSAGE_TEXT:
            return new Store(action.payload);
        default:
            return state;
    }
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
