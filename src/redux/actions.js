const loginAction = (name, token, id, is_npo, profilepic_path) => ({type: 'Login', name: name,	token: token, id: id, is_npo: is_npo, profilepic_path: profilepic_path})

const registerAction = (name, email, bio, is_npo, profilepic_path, token) => ({type: 'Register', name: name, email: email, bio: bio, is_npo: is_npo, profilepic_path: profilepic_path, token: token})

const displayUserAction = (name, bio, profilepic_path) => ({type: 'DisplayUser', name: name, bio:bio, profilepic_path: profilepic_path})

const displayUserDares = (npo_id, user_dare_id, broadcaster_id, pledge_amount_threshold, video_path) => ({type: 'DisplayUserDares', npo_id: npo_id, user_dare_id: user_dare_id, broadcaster_id: broadcaster_id, pledge_amount_threshold: pledge_amount_threshold, video_path: video_path})

module.exports = {loginAction, registerAction, displayUserAction, displayUserDares}
