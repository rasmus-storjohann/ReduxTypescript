import { SET_MESSAGE_TEXT } from '../application/constants';
import * as helpers from './redux-helpers';

export const setMessage = (message: string) => helpers.action(SET_MESSAGE_TEXT, message);

export type MessageAction = ReturnType<typeof setMessage>;

const isValid = (action: MessageAction): boolean => action.payload === action.payload;

export const reducer = (state: string = 'default text', action: MessageAction): string => {
    if (!isValid(action)) {
        return state;
    }
    switch (action.type) {
        case SET_MESSAGE_TEXT:
            return action.payload;
        default:
            return state;
    }
};

export type Store = string;
