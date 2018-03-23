import { combineReducers } from 'redux';
import { Counter, Message } from '../hello_world/models';

export default combineReducers({
    value: Counter.reducer,
    text: Message.reducer,
});
