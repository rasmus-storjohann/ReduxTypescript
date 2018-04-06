import { ActionTypes } from '../application/constants';
import * as helpers from '../application/helpers/redux-helpers';

// problem: this is public just for testing purposes
/* tslint:disable:typedef */
export const makeStore = (value: number) => ({ value });

export type Store = Readonly<ReturnType<typeof makeStore>>;

export const increment = (value: Store) => helpers.makeAction(ActionTypes.SET_COUNTER, { value: value.value + 1 });

export const decrement = (value: Store): SetCounterAction => helpers.makeAction(ActionTypes.SET_COUNTER, { value: value.value - 1 });

export type SetCounterAction = Readonly<ReturnType<typeof increment>>;

export type Actions = SetCounterAction;

export const reducer = (state: Store = makeStore(0), action: SetCounterAction): Store => {
    if (action.payload !== action.payload) {
        return state;
    }
    switch (action.type) {
        case ActionTypes.SET_COUNTER:
            return makeStore(action.payload.value);
        default:
            return state;
    }
};
