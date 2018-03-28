import { connect } from 'react-redux';
import { MyContainer } from './containers';
import * as counter from './counter';
import * as message from './message';
const mapStateToProps = (state) => ({
    value: state.value,
    text: state.text,
});
const mapDispatchToProps = (dispatch) => ({
    increment: (prop) => dispatch(counter.incrementAction(prop)),
    decrement: (prop) => dispatch(counter.decrementAction(prop)),
    setMessage: (newMessage) => dispatch(message.setMessageAction(newMessage)),
});
export default connect(mapStateToProps, mapDispatchToProps)(MyContainer);
//# sourceMappingURL=index.js.map