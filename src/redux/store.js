import { createStore } from 'redux';
import reducer from './reducer';

var startingState = {
 name: null,
 currentProfile: {
 	current: [],
 	past: []
 },
 email: null,
 is_npo: null, 
 profilepic_path: null,
 token: null
}


module.exports = createStore(reducer, startingState, window && window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())