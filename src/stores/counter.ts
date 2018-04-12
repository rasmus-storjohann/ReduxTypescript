import * as constants from '../application/constants';
import * as helpers from '../application/helpers/redux-helpers';

export type Store = Readonly<ReturnType<typeof buildDefaultStore>>;
export type SetCounterAction = Readonly<ReturnType<typeof increment>>;
export type ResetCounterAction = Readonly<ReturnType<typeof reset>>;

// tslint:disable-next-line:typedef
export const increment = (store: Store) => (
    helpers.makeAction(constants.SET_COUNTER, { value: store.value + 1 })
);

export const decrement = (store: Store): SetCounterAction => (
    helpers.makeAction(constants.SET_COUNTER, { value: store.value - 1 })
);

// tslint:disable-next-line:typedef
export const reset = () => (
    helpers.makeAction(constants.RESET_COUNTER)
);

// tslint:disable-next-line:typedef
const buildDefaultStore = () => (
    { value: 0 }
);

export const reducer = (store: Store = buildDefaultStore(), action?: SetCounterAction | ResetCounterAction): Store => {
    if (!action) {
        return store;
    }
    switch (action.type) {
        case constants.SET_COUNTER:
            return { ...store, value: action.payload.value };
        case constants.RESET_COUNTER:
            return { ...store, value: 0 };
        default:
            return store;
    }
};
