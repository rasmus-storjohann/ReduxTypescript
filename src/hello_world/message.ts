import { SET_MESSAGE_TEXT } from '../application/constants';

export const setMessage = (message: string) => ({
    type: SET_MESSAGE_TEXT,
    payload: message,
});

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
}

export type Store = string;
