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
        {this.props.expenseTotal > 0 ? <h2 style={{ textAlign: 'center' }}>{this.props.expenseTotal}</h2>: ''}
        <ExpenseSearch />
        <AddExpense />
        <EditExpense />
        <ExpenseList />
        <Alert />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  expenseTotal: state.expenseReducer.total
})

export default connect(mapStateToProps)(DashboardPage);
