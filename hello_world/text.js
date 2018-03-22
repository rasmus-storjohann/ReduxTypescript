const SET_TEXT = 'SET_TEXT';

export const setText = (text) => ({
    type: SET_TEXT,
    text: text,
});

export const mapTextToProps = state => {
    return { value: state.text };
};

export const reducer = (state = 'default text', action) => {
    if (action.text !== action.text || action.type !== SET_TEXT) {
        return state;
    }
    return action.text;
};
