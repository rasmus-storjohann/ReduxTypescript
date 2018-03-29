import { SET_COUNTER } from '../application/constants';
import * as helpers from './redux-helpers';

/* tslint:disable:typedef */
const makeStore = (value: number) => ({ value });

export type Store = ReturnType<typeof makeStore>;

export const increment = (value: Store) => helpers.makeAction(SET_COUNTER, value.value + 1);

export const decrement = (value: Store): SetCounterAction => helpers.makeAction(SET_COUNTER, value.value - 1);

export type SetCounterAction = ReturnType<typeof increment>;

export const reducer = (state: Store = makeStore(0), action: SetCounterAction): Store => {
    if (action.payload !== action.payload) {
        return state;
    }
    switch (action.type) {
        case SET_COUNTER:
            return makeStore(action.payload);
        default:
            return state;
    }
};
