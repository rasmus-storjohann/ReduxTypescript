import { connect } from 'react-redux';
import { MyContainer } from './containers';
import * as counter from '../stores/counter';
import * as message from '../stores/message';
import { Store, Dispatch } from '../application/store';

/* tslint:disable:typedef */
const mapStateToProps = (store: Store) => ({
    counterInProps: store.counterInStore,
    messageInProps: store.messageInStore,
});

const mapDispatchToProps = (dispatch: Dispatch) => ({
    increment: (prop: counter.Store) => dispatch(counter.increment(prop)),
    decrement: (prop: counter.Store) => dispatch(counter.decrement(prop)),
    setMessage: (newMessage: string) => dispatch(message.setMessage(newMessage)),
});

export default connect(mapStateToProps, mapDispatchToProps)(MyContainer);
