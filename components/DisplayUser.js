import { connect } from 'react-redux';

mapStateToProps = (state) => ({
	currentProfile : state.currentProfile
})

mapDispatchToProps (dispatch) => ({
	viewProfile : (profile) => dispatch({
		type: 'ViewProfile',
		profile: profile
	})
})

export default connect(mapStateToProps, mapDispatchToProps)