import React from 'react'
import { connect } from 'react-redux'
import { loginUser } from '../../../actions/authActions'
import './Login.css'

const Login = ({ dispatch }) => (
  <div className="container">
    <h1>Login</h1>
    <form onSubmit={event => {
      event.preventDefault()

      const username = event.target.username.value
      const password = event.target.password.value

      dispatch(loginUser(username, password))
    }}>
      <input type="text" name="username" />
      <input type="password" name="password" />
      <button>Submit</button>
    </form>
  </div>
)

export default connect()(Login)
