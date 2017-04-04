function loginReducer(state, action) {
	switch(action.type){
		case "login":
			return Object.assign({}, state, {username: action.username, token:action.token})
		case "logout":
			return Object.assign({}, state, {username: "", token: ""})
		default 
			return state 
	}
}

module.exports loginReducer