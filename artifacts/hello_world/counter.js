import { SET_COUNTER } from '../application/constants';
export const incrementAction = (store) => ({
    type: SET_COUNTER,
    value: store.value() + 1,
});
export const decrementAction = (store) => ({
    type: SET_COUNTER,
    value: store.value() - 1,
});
export const reducer = (state = new Store(0), action) => {
    if (action.value !== action.value || action.type !== SET_COUNTER) {
        return state;
    }
    return new Store(action.value);
};
export class Store {
    constructor(counterValue) {
        this._counterValue = counterValue;
    }
    value() {
        return this._counterValue;
    }
}
//# sourceMappingURL=counter.js.map