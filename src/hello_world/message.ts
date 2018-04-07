import { SET_MESSAGE_TEXT } from '../application/constants';
import * as helpers from './redux-helpers';

const makeStore = (message: string) => ({ message });

export type Store = ReturnType<typeof makeStore>;

export const setMessage = (message: string) => helpers.action(SET_MESSAGE_TEXT, message);

export type MessageAction = ReturnType<typeof setMessage>;

const isValid = (action: MessageAction): boolean => action.payload === action.payload;

export const reducer = (state: Store = makeStore('default text'), action: MessageAction): Store => {
    if (!isValid(action)) {
        return state;
    }
    switch (action.type) {
        case SET_MESSAGE_TEXT:
            return makeStore(action.payload);
        default:
            return state;
    }
};
