import * as constants from './constants';

const initialState = {
    value: 0,
    text: 'default text',
};

export const helloWorldReducer = (state = initialState, action) => {
    switch (action.type) {
        case constants.SET_VALUE:
            return { ...state, value: action.value };
        case constants.SET_TEXT:
            console.log('reducer set text = ' + action.text);
            return { ...state, text: action.text };
        default:
            return state;
    }
}
