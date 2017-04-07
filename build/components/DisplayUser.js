'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _reactRedux = require('react-redux');

var mapStateToProps = function mapStateToProps(state) {
	return {
		currentProfile: state.currentProfile
	};
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
	return {
		viewProfile: function viewProfile(profile) {
			return dispatch({
				type: 'ViewProfile',
				profile: profile
			});
		}
	};
};

exports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps);