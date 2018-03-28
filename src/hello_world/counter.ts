import { SET_COUNTER } from '../application/constants';

export const increment = (store: number) => ({
    type: SET_COUNTER,
    payload: store + 1,
});

export type SetCounterAction = ReturnType<typeof increment>;

export const decrement = (store: number): SetCounterAction => ({
    type: SET_COUNTER,
    payload: store - 1
});

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
}

export type Store = number;
