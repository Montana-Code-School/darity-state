function loginReducer(state, action) {
	switch(action.type){
		case "Login":
			return Object.assign({}, state, {username: action.username, token:action.token})
		case "Logout":
			return Object.assign({}, state, {username: "", token: ""})
		case "DisplayUser":
			return Object.assign({}, state, {currentProfile: action.profile}) 
		case "Register":
			return Object.assign({}, state, {username: action.username, email: action.email, token:action.token})
		default:
			return state 
	}
}

export default loginReducer