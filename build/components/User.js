'use strict';

Object.defineProperty(exports, "__esModule", {
		value: true
});

var _reactRedux = require('react-redux');

var _actions = require('../redux/actions');

var mapStateToProps = function mapStateToProps(state) {
		return {
				name: state.name,
				token: state.token,
				email: state.email,
				is_npo: state.is_npo,
				profilepic_path: state.profilepic_path
		};
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
		return {
				login: function login(name) {
						return dispatch((0, _actions.loginAction)(name));
				},
				register: function register(name, email, is_npo, profilepic_path) {
						return dispatch((0, _actions.registerAction)(name, email, is_npo, profilepic_path));
				}
		};
};

exports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps);