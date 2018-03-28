import { connect } from 'react-redux';
import { MyContainer } from './containers';
import * as counter from './counter';
import * as message from './message';
import { Store, Dispatch } from '../application/store';

const mapStateToProps = (state: Store) => ({
    value: state.value,
    text: state.text,
});

const mapDispatchToProps = (dispatch: Dispatch) => ({
    increment: (prop: counter.Store) => dispatch(counter.incrementAction(prop)),
    decrement: (prop: counter.Store) => dispatch(counter.decrementAction(prop)),
    setMessage: (newMessage: string) => dispatch(message.setMessageAction(newMessage)),
});

export default connect(mapStateToProps, mapDispatchToProps)(MyContainer);
