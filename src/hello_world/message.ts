import { SET_MESSAGE_TEXT } from '../application/constants';
import * as helpers from './redux-helpers';

/* tslint:disable:typedef */
const makeStore = (message: string) => ({ message });

export type Store = Readonly<ReturnType<typeof makeStore>>;

/* tslint:disable:typedef */
export const setMessage = (message: string) => helpers.makeAction(SET_MESSAGE_TEXT, message);

export type MessageAction = Readonly<ReturnType<typeof setMessage>>;

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
