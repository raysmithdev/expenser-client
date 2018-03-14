import React from 'react'
import { connect } from 'react-redux'
import { registerUser } from '../../actions/authActions'

const Register = ({ dispatch }) => (
  <div>
    <h1>Register</h1>
    <form onSubmit={event => {
      event.preventDefault()

      const username = event.target.username.value
      const password = event.target.password.value

      dispatch(registerUser(username, password))
    }}>
      <input type="text" name="username" />
      <input type="password" name="password" />
      <button>Submit</button>
    </form>
  </div>
)

export default connect()(Register)
