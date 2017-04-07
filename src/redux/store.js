import { createStore } from 'redux';
import reducer from './reducer';

var startingState = {
 username: null,
 currentProfile: {
 	current: [],
 	past: []
 },
 email: null,
 token: null
}


module.exports = createStore(reducer, startingState, window && window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())