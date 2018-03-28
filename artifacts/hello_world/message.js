import { SET_MESSAGE_TEXT } from '../application/constants';
export const reducer = (state = new Store('default text'), action) => {
    if (action.type !== SET_MESSAGE_TEXT || action.value !== action.value) {
        return state;
    }
    return new Store(action.value);
};
export const setMessageAction = (message) => ({
    type: SET_MESSAGE_TEXT,
    value: message,
});
export class Store {
    constructor(message) {
        this._message = message;
    }
    message() {
        return this._message;
    }
}
//# sourceMappingURL=message.js.map