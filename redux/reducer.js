function loginReducer(state, action) {
	switch(action.type){
		case "login":
			return Object.assign({}, state, {username: action.username, token:action.token})
		case "logout":
			return Object.assign({}, state, {username: "", token: ""})
		case "DisplayUser":
			return Object.assign({}, state, {currentProfile: action.profile}) 
		case "register":
			return Object.assign({}, state, {username: action.username, email: action.email, token:action.token})
		default 
			return state 
	}
}

// function registerReducer(state, action) {
// 	switch(action.type){
// 		case "register":
// 			return Object.assign({}, state, {username: action.username, email: action.email, token:action.token})
// 		default 
// 			return state 
// 	}
// } 

module.exports loginReducer