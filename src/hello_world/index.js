import React from 'react';
import { connect } from 'react-redux';
import { MyContainer } from './containers';

const mapStateToProps = (state) => ({
    value: state.value,
    text: state.text,
});

const mapDispatchToProps = (dispatch) => ({
    increment: (prop) => dispatch(prop.incrementAction()),
    decrement: (prop) => dispatch(prop.decrementAction()),
    setMessage: (prop, message) => dispatch(prop.setMessageAction(message)),
});

export const Container = connect(mapStateToProps, mapDispatchToProps)(MyContainer);
