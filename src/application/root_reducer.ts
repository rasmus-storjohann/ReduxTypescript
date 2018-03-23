import { combineReducers } from 'redux';
import { Counter, Message } from '../hello_world/models';

export const rootReducer = combineReducers({
    value: Counter.reducer,
    text: Message.reducer,
});
