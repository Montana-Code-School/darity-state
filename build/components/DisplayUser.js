'use strict';

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

module.exports = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps);