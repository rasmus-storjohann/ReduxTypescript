import { SET_COUNTER } from '../application/constants';
import * as helpers from './redux-helpers';

export const increment = (value: number) => helpers.action(SET_COUNTER, value + 1);
export const decrement = (value: number): SetCounterAction => helpers.action(SET_COUNTER, value - 1);

export type SetCounterAction = ReturnType<typeof increment>;

export const reducer = (state: number = 0, action: SetCounterAction): number => {
    if (action.payload !== action.payload) {
        return state;
    }
    switch (action.type) {
        case SET_COUNTER:
            return action.payload;
        default:
            return state;
    }
};

export type Store = number;
