import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchExpenses } from '../../actions/expenseActions'
import AddExpense from './AddExpense/AddExpense'
import EditExpense from './EditExpense/EditExpense'
import ExpenseList from './ExpenseList/ExpenseList'
import ExpenseSearch from './ExpenseSearch/ExpenseSearch'
import Alert from '../Alert/Alert'
import Navbar from './Navbar/Navbar'
import './Dashboard.css'

class DashboardPage extends Component {
  componentDidMount() {
    this.props.dispatch(fetchExpenses())
  }

  render() {
    return (
      <div>
        <Navbar />
        <ExpenseSearch />
        <AddExpense />
        <EditExpense />
        <ExpenseList />
        <Alert />
      </div>
    );
  }
}

export default connect()(DashboardPage);
