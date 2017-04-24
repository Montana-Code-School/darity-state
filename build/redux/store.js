'use strict';

var _redux = require('redux');

var _reducer = require('./reducer');

var _reducer2 = _interopRequireDefault(_reducer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var startingState = {
  name: null,
  currentProfile: {
    current: [],
    past: []
  },
  email: null,
  id: null,
  is_npo: null,
  bio: null,
  profilepic_path: null,
  token: null,
  npo_id: null,
  user_dare_id: null,
  broadcaster_id: null,
  pledge_amount_threshold: null,
  video_path: null
};

module.exports = (0, _redux.createStore)(_reducer2.default, startingState, window && window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());