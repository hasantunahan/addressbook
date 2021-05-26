import axios from "axios"
import { useDispatch } from "react-redux"

export const getUserList = (token) => dispatch => {
    dispatch({ type: 'getUserListStart' });

    axios
        .get('http://10.6.20.58:3000/api/user', {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        })
        .then(res => dispatch({ type: 'GetUserList', payload: res.data }))
        .catch(err => dispatch({ type: 'GetUserListError', payload: err.response.data.message }))
}

export const setLoginUserAdd = (body) => dispatch => {
    dispatch({ type: 'setLoginUserAddStart' });
    axios
        .post('http://10.6.20.58:3000/api/user', body)
        .then(res => dispatch({ type: 'setLoginUserAdd', payload: res.data }))
        .catch(err => dispatch({ type: 'setLoginUserAddError', payload: err.response.data.message }))

}

export const isLogin = (body) => dispatch => {
    dispatch({ type: 'isLoginStart' });
    axios
        .post('http://10.6.20.58:3000/api/user/login', body)
        .then(res => dispatch({ type: 'isLogin', payload: res.data }))
        .catch(err => dispatch({ type: 'isLoginError', payload: err.response.data.message }))

}


export const updateUserWithId = (id,body) => dispatch => {
    dispatch({ type: 'updateStart' });
    axios
        .patch(`http://10.6.20.58:3000/api/user/${id}`, body)
        .then(res => dispatch({ type: 'updateUser', payload: res.data }))
        .catch(err => dispatch({ type: 'updateUserError', payload: err.response.data.message }))
}


