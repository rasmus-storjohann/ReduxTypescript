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
    increment: (prop: counter.Store) => dispatch(counter.increment(prop)),
    decrement: (prop: counter.Store) => dispatch(counter.decrement(prop)),
    setMessage: (newMessage: string) => dispatch(message.setMessage(newMessage)),
});

export default connect(mapStateToProps, mapDispatchToProps)(MyContainer);
