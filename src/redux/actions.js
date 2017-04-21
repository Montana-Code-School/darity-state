const loginAction = (name, token) => ({type: 'Login', name: name, token: token})

const registerAction = (name, email, bio, is_npo, profilepic_path, token) => ({type: 'Register', name: name, email: email, bio: bio, is_npo: is_npo, profilepic_path: profilepic_path, token: token})

const displayUserAction = (name, bio, profilepic_path) => ({type: 'DisplayUser', name: name, bio:bio, profilepic_path: profilepic_path})

module.exports = {loginAction, registerAction, displayUserAction}