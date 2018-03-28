import { combineReducers } from 'redux';
import * as counter from '../hello_world/counter';
import * as message from '../hello_world/message';
export const rootReducer = combineReducers({
    value: counter.reducer,
    text: message.reducer,
});
//# sourceMappingURL=store.js.map