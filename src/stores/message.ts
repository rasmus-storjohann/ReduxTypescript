import { ActionTypes } from '../application/constants';
import * as helpers from '../application/helpers/redux-helpers';

export type Store = Readonly<ReturnType<typeof makeStore>>;
export type MessageAction = Readonly<ReturnType<typeof setMessage>>;
export type Actions = MessageAction;

/* tslint:disable:typedef */
const makeStore = (message: string) => (
    { message }
);

/* tslint:disable:typedef */
export const setMessage = (message: string) => (
    helpers.makeAction(ActionTypes.SET_MESSAGE_TEXT, { message })
);

export const reducer = (store = makeStore('default text'), action?: Actions): Store => {
    if (!action) {
        return store;
    }
    switch (action.type) {
        case ActionTypes.SET_MESSAGE_TEXT:
            return makeStore(action.payload.message);
        default:
            return store;
    }
};
