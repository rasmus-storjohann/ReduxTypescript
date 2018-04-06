import { ActionTypes } from '../application/constants';
import * as helpers from '../application/helpers/redux-helpers';

/* tslint:disable:typedef */
const makeStore = (message: string) => ({ message });

export type Store = Readonly<ReturnType<typeof makeStore>>;

/* tslint:disable:typedef */
export const setMessage = (message: string) => helpers.makeAction(ActionTypes.SET_MESSAGE_TEXT, message);

export type MessageAction = Readonly<ReturnType<typeof setMessage>>;

const isValid = (action: MessageAction): boolean => action.payload === action.payload;

export const reducer = (state: Store = makeStore('default text'), action: MessageAction): Store => {
    if (!isValid(action)) {
        return state;
    }
    switch (action.type) {
        case ActionTypes.SET_MESSAGE_TEXT:
            return makeStore(action.payload);
        default:
            return state;
    }
};
