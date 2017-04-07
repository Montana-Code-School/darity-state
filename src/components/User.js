import { connect } from 'react-redux'
import { loginAction } from '../redux/actions'

const mapStateToProps = state =>( {
		username: state.username,
		token: state.token,
		email: state.email
	})

const mapDispatchToProps = dispatch =>({
		login: (username) => dispatch(loginAction(username)), 
		register: (username, email) => dispatch(registerAction(username, email))
	})


export default connect(mapStateToProps, mapDispatchToProps)