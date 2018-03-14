import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchExpenses } from '../../actions/expenseActions'
import AddExpense from './AddExpense/AddExpense'
import ExpenseList from './ExpenseList/ExpenseList'
import Alert from '../Alert/Alert'
import Navbar from './Navbar/Navbar'
import Subheader from 'material-ui/Subheader'
import './Dashboard.css'

class DashboardPage extends Component {
  componentDidMount() {
    this.props.dispatch(fetchExpenses())
  }
  
  render() {
    return (
      <div>
        <Navbar />
        <AddExpense />
        <ExpenseList />
        <Alert />
      </div>
    );
  }
}

export default connect()(DashboardPage);
