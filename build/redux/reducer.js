"use strict";

function loginReducer(state, action) {
	switch (action.type) {
		case "Login":
			return Object.assign({}, state, { name: action.name, token: action.token });
		case "Logout":
			return Object.assign({}, state, { name: "", token: "" });
		case "DisplayUser":
			return Object.assign({}, state, { currentProfile: action.profile });
		case "Register":
			return Object.assign({}, state, { name: action.name, email: action.email, is_npo: action.is_npo, profilepic_path: action.profilepic_path, token: action.token });
		default:
			return state;
	}
}

module.exports = loginReducer;