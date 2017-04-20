const loginAction = (name, token) => ({type: 'Login', name: name, token: token})

const registerAction = (name, email, is_npo, profilepic_path, token) => ({type: 'Register', name: name, email: email, is_npo: is_npo, profilepic_path: profilepic_path, token: token})

const displayUserAction = (profile) => ({type: 'ViewProfile', profile: profile})

module.exports = {loginAction, registerAction, displayUserAction}