'use strict';

var loginAction = function loginAction(name, token, is_npo, profilepic_path) {
  return { type: 'Login', name: name, token: token, is_npo: is_npo, profilepic_path: profilepic_path };
};

var registerAction = function registerAction(name, email, bio, is_npo, profilepic_path, token) {
  return { type: 'Register', name: name, email: email, bio: bio, is_npo: is_npo, profilepic_path: profilepic_path, token: token };
};

var displayUserAction = function displayUserAction(name, bio, profilepic_path) {
  return { type: 'DisplayUser', name: name, bio: bio, profilepic_path: profilepic_path };
};

var displayUserDares = function displayUserDares(npo_id, user_dare_id, broadcaster_id, pledge_amount_threshold, video_path) {
  return { type: 'DisplayUserDares', npo_id: npo_id, user_dare_id: user_dare_id, broadcaster_id: broadcaster_id, pledge_amount_threshold: pledge_amount_threshold, video_path: video_path };
};

module.exports = { loginAction: loginAction, registerAction: registerAction, displayUserAction: displayUserAction, displayUserDares: displayUserDares };