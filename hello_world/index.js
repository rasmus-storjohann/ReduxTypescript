import React from 'react';
import { connect } from 'react-redux';
import { MyContainer } from './containers';

const mapStateToProps = (state) => ({
    value: state.value,
    text: state.text,
});

const mapDispatchToProps = (dispatch) => ({
    incrementThis: (value) => dispatch(value.increment()),
    decrementThis: (value) => dispatch(value.decrement()),
    changeThis: (text, newText) => dispatch(text.setMessage(newText)),
});

export const Container = connect(mapStateToProps, mapDispatchToProps)(MyContainer);
