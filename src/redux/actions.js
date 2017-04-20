const loginAction = (username, token) => ({type: 'Login', name: name, token: token})

const registerAction = (username, email, token) => ({type: 'Register', name: name, email: email, is_npo: is_npo, profilepic_path: profilepic_path, token: token})

const displayUserAction = (profile) => ({type: 'ViewProfile', profile: profile})

export default {loginAction, registerAction, displayUserAction}