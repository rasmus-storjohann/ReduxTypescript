import { connect } from 'react-redux';
import { MyContainer } from './containers';
import { Counter, Message } from './models';

interface StoreState {
    value: Counter;
    text: Message;
}

const mapStateToProps = (state: StoreState) => ({
    value: state.value,
    text: state.text,
});

const mapDispatchToProps = (dispatch) => ({
    increment: (prop: Counter) => dispatch(prop.incrementAction()),
    decrement: (prop: Counter) => dispatch(prop.decrementAction()),
    setMessage: (prop: Message, message: string) => dispatch(prop.setMessageAction(message)),
});

export default connect(mapStateToProps, mapDispatchToProps)(MyContainer);
