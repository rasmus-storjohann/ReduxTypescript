import * as constants from './constants';

export const increment = (value) => {
    const newValue = value + 1;
    console.log('Created increment action with value = ' + newValue);
    return {
        type: constants.SET_VALUE,
        value: newValue,
    };
}

export const decrement = value => {
    const newValue = value - 1;
    console.log('Created increment action with value = ' + newValue);
    return {
        type: constants.SET_VALUE,
        value: newValue,
    }
}
