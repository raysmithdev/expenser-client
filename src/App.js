import React, { Component } from 'react'
import './App.css'
import { Router, Route } from "react-router-dom"
import LandingPage from './components/LandingPage'
import Register from './components/Auth/Register'
import DashboardPage from './components/Dashboard/DashboardPage'
import Login from './components/Auth/Login/Login'
import history from './history'
import { connect } from 'react-redux'
import { loginUserSuccess } from './actions/authActions'

class App extends Component {
  componentDidMount() {
    if(localStorage.getItem('authToken')) {
      const authToken = localStorage.getItem('authToken')
      const userId = localStorage.getItem('userId')

      this.props.dispatch(loginUserSuccess(userId, authToken))
      history.push('/dashboard')
    }
  }

  render() {
    return (
      <Router history={history}>
        <div>
          <Route exact path="/" component={LandingPage} />
          <Route exact path="/register" component={Register} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/dashboard" component={DashboardPage} />
        </div>
      </Router>
    );
  }
}

export default connect()(App)
