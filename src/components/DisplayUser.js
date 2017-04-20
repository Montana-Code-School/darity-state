import { connect } from 'react-redux';

const mapStateToProps = (state) => ({
	currentProfile : state.currentProfile
})

const mapDispatchToProps = (dispatch) => ({
	viewProfile : (profile) => dispatch({
		type: 'ViewProfile',
		profile: profile
	})
})

module.exports = connect(mapStateToProps, mapDispatchToProps)