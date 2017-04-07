const loginAction = (username, token) => ({type: 'Login', username: username, token: token})

const registerAction = (username, email, token) => ({type: 'Register', username: username, email: email, token: token})

export default {loginAction, registerAction}