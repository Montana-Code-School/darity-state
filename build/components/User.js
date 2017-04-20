'use strict';

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
				login: function login(name, token) {
						return dispatch((0, _actions.loginAction)(name, token));
				},
				register: function register(name, email, is_npo, profilepic_path, token) {
						return dispatch((0, _actions.registerAction)(name, email, is_npo, profilepic_path, token));
				}
		};
};

module.exports = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps);