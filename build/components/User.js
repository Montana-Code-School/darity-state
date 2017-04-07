'use strict';

Object.defineProperty(exports, "__esModule", {
		value: true
});

var _reactRedux = require('react-redux');

var _actions = require('../redux/actions');

var mapStateToProps = function mapStateToProps(state) {
		return {
				username: state.username,
				token: state.token,
				email: state.email
		};
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
		return {
				login: function login(username) {
						return dispatch((0, _actions.loginAction)(username));
				},
				register: function register(username, email) {
						return dispatch(registerAction(username, email));
				}
		};
};

exports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps);