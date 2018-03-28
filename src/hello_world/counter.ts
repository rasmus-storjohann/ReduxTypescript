import { SET_COUNTER } from '../application/constants';

export const increment = (store: Store) => ({
    type: SET_COUNTER,
    payload: store.value() + 1,
});

export type SetCounterAction = ReturnType<typeof increment>;

export const decrement = (store: Store): SetCounterAction => ({
    type: SET_COUNTER,
    payload: store.value() - 1
});

export const reducer = (state: Store = new Store(0), action: SetCounterAction): Store => {
    if (action.payload !== action.payload) {
        return state;
    }
    switch (action.type) {
        case SET_COUNTER:
            return new Store(action.payload);
        default:
            return state;
    }
}

export class Store {

    private _counterValue: number;

    constructor(counterValue: number) {
        this._counterValue = counterValue;
    }

    value(): number {
        return this._counterValue;
    }
}
