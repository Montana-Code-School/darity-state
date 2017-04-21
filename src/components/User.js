import { connect } from 'react-redux'
import { loginAction } from '../redux/actions'
import { registerAction } from '../redux/actions'
import { displayUserAction } from '../redux/actions'
import { displayUserDares } from '../redux/actions'


const mapStateToProps = state =>( {
		name: state.name,
		token: state.token,
		email: state.email,
		bio: state.bio, 
		is_npo: state.is_npo, 
		profilepic_path: state.profilepic_path
	})

const mapDispatchToProps = dispatch =>({
		login: (name, token) => dispatch(loginAction(name, token)), 
		register: (name, email, bio, is_npo, profilepic_path, token) => dispatch(registerAction(name, email, bio, is_npo, profilepic_path, token))
		profile: (name, bio, profilepic_path) => dispatch(displayUserAction(name, bio, profilepic_path))
	})


module.exports = connect(mapStateToProps, mapDispatchToProps)