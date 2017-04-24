'use strict';

var _reactRedux = require('react-redux');

var _actions = require('../redux/actions');

var mapStateToProps = function mapStateToProps(state) {
		return {
				name: state.name,
				token: state.token,
				email: state.email,
				bio: state.bio,
				is_npo: state.is_npo,
				profilepic_path: state.profilepic_path
		};
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
		return {
				login: function login(name, token, profilepic_path, is_npo) {
						return dispatch((0, _actions.loginAction)(name, token, profilepic_path, is_npo));
				},
				register: function register(name, email, bio, is_npo, profilepic_path, token) {
						return dispatch((0, _actions.registerAction)(name, email, bio, is_npo, profilepic_path, token));
				},
				profile: function profile(name, bio, profilepic_path) {
						return dispatch((0, _actions.displayUserAction)(name, bio, profilepic_path));
				}
		};
};

module.exports = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps);