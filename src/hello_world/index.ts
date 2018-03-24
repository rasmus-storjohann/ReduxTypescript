import { connect } from 'react-redux';
import { MyContainer } from './containers';
import { Counter, Message } from './models';
import { Store, Dispatch } from '../application/store';

const mapStateToProps = (state: Store) => ({
    value: state.value,
    text: state.text,
});

const mapDispatchToProps = (dispatch: Dispatch) => ({
    increment: (prop: Counter) => dispatch(prop.incrementAction()),
    decrement: (prop: Counter) => dispatch(prop.decrementAction()),
    setMessage: (prop: Message, message: string) => dispatch(prop.setMessageAction(message)),
});

export default connect(mapStateToProps, mapDispatchToProps)(MyContainer);
