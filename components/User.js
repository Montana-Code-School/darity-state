import { connect } from 'react-redux'
import { loginAction } from '../redux/actions'

mapStateToProps(state){
	return {
		username: state.username
	}
}


mapDispatchToProps(dispatch){
	return {
		login: (username) => dispatch(loginAction(username)) 
	}
}

export default connect(mapStateToProps, mapDispatchToProps)