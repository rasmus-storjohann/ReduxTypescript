import { SET_TEXT } from '../constants';

export const setText = (text) => ({
    type: SET_TEXT,
    text: text,
});

export const mapper = state => {
    return { value: state.text };
};

export const textReducer = (state = 'default text', action) => {
    if (action.text !== action.text || action.type !== SET_TEXT) {
        return state;
    }
    return action.text;
};
