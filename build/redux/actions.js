'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
var loginAction = function loginAction(username, token) {
  return { type: 'Login', username: username, token: token };
};

var registerAction = function registerAction(username, email, token) {
  return { type: 'Register', username: username, email: email, token: token };
};

exports.default = { loginAction: loginAction, registerAction: registerAction };