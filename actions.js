import * as constants from './constants';

export const setValueToFour = () => {
    return {
        type: constants.SET_VALUE,
        value: 4,
    };
}

export const setValueTo = newValue => {
    return {
        type: constants.SET_VALUE,
        value: newValue,
    }
}
