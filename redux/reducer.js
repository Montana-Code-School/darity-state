function loginReducer(state, action) {
	switch(action.type){
		case "login":
			return Object.assign({}, state, {username: action.username, token:action.token})
		case "logout":
			return Object.assign({}, state, {username: "", token: ""})
		case "DisplayUser":
			return Object.assign({}, state, {currentProfile: action.profile}) 
		default 
			return state 
	}
}

module.exports loginReducer