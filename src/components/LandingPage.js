import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class LandingPage extends Component {
  render() {
    return (
      <div>
        <h1>Hello</h1>
        <Link to="/register">
          <button>Register</button>
        </Link>

        <Link to="/login">
          <button>Login</button>
        </Link>
      </div>
    );
  }
}

export default LandingPage;
