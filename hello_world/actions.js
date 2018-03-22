import * as constants from './constants';

export const setText = (text) => ({
    type: constants.SET_TEXT,
    text: text,
});

export const increment = (value) => ({
    type: constants.SET_VALUE,
    value: value + 1,
});

export const decrement = value => ({
    type: constants.SET_VALUE,
    value: value - 1,
});
