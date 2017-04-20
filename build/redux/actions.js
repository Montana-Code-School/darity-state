'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
var loginAction = function loginAction(name, token) {
  return { type: 'Login', name: name, token: token };
};

var registerAction = function registerAction(name, email, is_npo, profilepic_path, token) {
  return { type: 'Register', name: name, email: email, is_npo: is_npo, profilepic_path: profilepic_path, token: token };
};

var displayUserAction = function displayUserAction(profile) {
  return { type: 'ViewProfile', profile: profile };
};

exports.default = { loginAction: loginAction, registerAction: registerAction, displayUserAction: displayUserAction };