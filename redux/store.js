import { createStore } from 'redux';
import loginReducer from './reducer';

var startingState = {
 username: null,
 token: null
}


module.exports = createStore(reducer, startingState, window && window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())