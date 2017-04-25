'use strict';

var _reactRedux = require('react-redux');

var mapStateToProps = function mapStateToProps(state) {
	return {
		currentDare: state.currentDare
	};
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
	return {
		viewDare: function viewDare(dare) {
			return dispatch({
				type: 'ViewDare',
				dare: dare
			});
		}
	};
};

module.exports = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps);