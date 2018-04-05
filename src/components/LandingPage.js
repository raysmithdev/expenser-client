import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './LandingPage.css'
import RaisedButton from 'material-ui/RaisedButton'

class LandingPage extends Component {
  render() {
    return (
      <div className="container">
        <h1 className="title">Welcome</h1>
        <Link to="/register">
          <RaisedButton backgroundColor='#F16664' label="Register" />
        </Link>

        <Link to="/login">
          <RaisedButton backgroundColor='#F16664' label="Login" />
        </Link>
      </div>
    );
  }
}

export default LandingPage;
