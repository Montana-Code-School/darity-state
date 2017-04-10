const loginAction = (username, token) => ({type: 'Login', username: username, token: token})

const registerAction = (username, email, token) => ({type: 'Register', username: username, email: email, token: token})

const displayUserAction = (profile) => ({type: 'ViewProfile', profile: profile})

export default {loginAction, registerAction, displayUserAction}