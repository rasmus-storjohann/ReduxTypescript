import { Dispatch } from 'redux';
import { connect } from 'react-redux';
import { Props, Actions, HelloWorldContainer } from './hello_world_container';
import * as counter from '../stores/counter';
import * as message from '../stores/message';
import { Store } from '../application/store';

const mapStateToProps = (store: Store): Props => ({
    counterInProps: store.counterInStore,
    messageInProps: store.messageInStore,
});

const mapDispatchToProps = (dispatch: Dispatch<Store>): Actions => ({
    increment: (aCounter: counter.Store): counter.SetCounterAction => dispatch(counter.increment(aCounter)),
    decrement: (aCounter: counter.Store): counter.SetCounterAction => dispatch(counter.decrement(aCounter)),
    setMessage: (aMessage: string): message.MessageAction => dispatch(message.setMessage(aMessage)),
});

export default connect(mapStateToProps, mapDispatchToProps)(HelloWorldContainer);
