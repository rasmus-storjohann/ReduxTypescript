import React from 'react';
import { connect } from 'react-redux';
import { MyContainer } from './containers';
import * as value from './value';
import * as text from './text';

const mapValueToProps = (state) => ({
    value: state.value,
});

const mapDispatchToProps = (dispatch) => {
    return {
        incrementThis: (newValue) => dispatch(value.increment(newValue)),
        decrementThis: (newValue) => dispatch(value.decrement(newValue)),
        changeThis: (newText) => dispatch(text.setText(newText)),
    };
};

export const Container = connect(mapValueToProps, mapDispatchToProps)(MyContainer);
