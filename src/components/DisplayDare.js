import { connect } from 'react-redux';

const mapStateToProps = (state) => ({
	currentDare : state.currentDare
})

const mapDispatchToProps = (dispatch) => ({
	viewDare : (dare) => dispatch({
		type: 'ViewDare',
		dare: dare
	})
})

module.exports = connect(mapStateToProps, mapDispatchToProps)
