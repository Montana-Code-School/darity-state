import { connect } from 'react-redux'
import { loginAction } from '../redux/actions'
import { registerAction } from '../redux/actions'

const mapStateToProps = state =>( {
		name: state.name,
		token: state.token,
		email: state.email, 
		is_npo: state.is_npo, 
		profilepic_path: state.profilepic_path
	})

const mapDispatchToProps = dispatch =>({
		login: (name, token) => dispatch(loginAction(name, token)), 
		register: (name, email, is_npo, profilepic_path, token) => dispatch(registerAction(name, email, is_npo, profilepic_path, token))
	})


export default connect(mapStateToProps, mapDispatchToProps)