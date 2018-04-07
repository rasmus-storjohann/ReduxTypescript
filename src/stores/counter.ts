import { ActionTypes } from '../application/constants';
import * as helpers from '../application/helpers/redux-helpers';

export type Store = Readonly<ReturnType<typeof makeStore>>;
export type SetCounterAction = Readonly<ReturnType<typeof increment>>;
export type Actions = SetCounterAction;

/* tslint:disable:typedef */
const makeStore = (value: number) => (
    { value }
);

export const increment = (store: Store) => (
    helpers.makeAction(ActionTypes.SET_COUNTER, { value: store.value + 1 })
);

export const decrement = (store: Store): SetCounterAction => (
    helpers.makeAction(ActionTypes.SET_COUNTER, { value: store.value - 1 })
);

export const reducer = (store = makeStore(0), action?: Actions): Store => {
    if (!action) {
        return store;
    }
    switch (action.type) {
        case ActionTypes.SET_COUNTER:
            return makeStore(action.payload.value);
        default:
            return store;
    }
};
