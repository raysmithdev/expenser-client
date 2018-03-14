import { API_BASE_URL } from '../config'
import history from '../history'

export const registerUser = (username, password) => dispatch => {
  fetch(`${API_BASE_URL}/auth/register`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      username,
      password
    })
  })
  .then(res => res.json())
  .then(json => window.location = '/login')
  .catch(error => console.log(error))
}

const LOGIN_USER_SUCCESS = 'LOGIN_USER_SUCCESS'
export const loginUserSuccess = (userId, token) => ({
  type: LOGIN_USER_SUCCESS,
  userId,
  token
})

export const loginUser = (username, password) => dispatch => {
  fetch(`${API_BASE_URL}/auth/login`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      username,
      password
    })
  })
  .then(res => res.json())
  .then(response => {
    localStorage.setItem('authToken', response.authToken)
    localStorage.setItem('userId', response.userId)
    dispatch(loginUserSuccess(response.userId, response.authToken))
    history.push('/dashboard')

  })
  .catch(error => console.log(error))
}

export const logoutUser = () => dispatch => {
  localStorage.clear()
  window.location = '/'
}
