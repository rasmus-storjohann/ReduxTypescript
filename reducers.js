import * as constants from './constants';

const initialState = {
    value: 0
};

export const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case constants.SET_VALUE:
            console.log('Look ma, Redux!! New value = ' + action.value);
            return { ...state, value: action.value };
        default:
            return state;
    }
}
