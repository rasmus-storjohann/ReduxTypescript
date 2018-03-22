const SET_VALUE = 'SET_VALUE';

export const increment = (value) => ({
    type: SET_VALUE,
    value: value + 1,
});

export const decrement = (value) => ({
    type: SET_VALUE,
    value: value - 1,
});

export const mapValueToProps = (state) => ({
    value: state.value
});

export const reducer = (state = 0, action) => {
    if (action.value !== action.value || action.type !== SET_VALUE) {
        return state;
    }
    return action.value;
};
