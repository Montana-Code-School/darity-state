import { connect } from 'react-redux'
import { loginAction } from '../redux/actions'

mapStateToProps(state){
	return {
		username: state.username,
		token: state.token,
		email: state.email
	}
}


mapDispatchToProps(dispatch){
	return {
		login: (username) => dispatch(loginAction(username)), 
		register: (username, email) => dispatch(registerAction(username, email))
	}
}

export default connect(mapStateToProps, mapDispatchToProps)