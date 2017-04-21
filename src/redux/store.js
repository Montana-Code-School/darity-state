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
 bio: null, 
 profilepic_path: null,
 token: null, 
 npo_id: null, 
 user_dare_id: null, 
 broadcaster_id: null,
 pledge_amount_threshold: null, 
 video_path: null 
}


module.exports = createStore(reducer, startingState, window && window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())