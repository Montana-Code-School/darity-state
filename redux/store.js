import { createStore } from 'redux';
import loginReducer from './reducer';

var startingState = {
 username: "",
 token: ""
}


module.exports = createStore(reducer, startingState, window && window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())