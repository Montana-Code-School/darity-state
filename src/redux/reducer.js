function loginReducer(state, action) {
	switch(action.type){
		case "Login":
			return Object.assign({}, state, {name: action.name, token:action.token, profilepic_path: action.profilepic_path, is_npo: action.is_npo})
		case "Logout":
			return Object.assign({}, state, {name: "", token: ""})
		case "DisplayUser":
			return Object.assign({}, state, {name: action.name, bio:action.bio, profilepic_path: action.profilepic_path  })
		case "Register":
			return Object.assign({}, state, {name: action.name, email: action.email, bio:action.bio, is_npo: action.is_npo, profilepic_path:action.profilepic_path, token:action.token})
		case "DisplayUserDares":
			return Object.assign({}, state, {npo_id: action.npo_id, user_dare_id: action.user_dare_id, broadcaster_id: action.broadcaster_id, pledge_amount_threshold: action.pledge_amount_threshold, video_path: action.video_path})
		default:
			return state
	}
}

module.exports = loginReducer
