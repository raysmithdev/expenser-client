import React from 'react'
import { connect } from 'react-redux'
import {
  Table,
  TableBody,
  TableHeader,
  TableHeaderColumn,
  TableRow,
  TableRowColumn,
} from 'material-ui/Table'
import './ExpenseList.css'
import moment from 'moment'
import FontIcon from 'material-ui/FontIcon'

const ExpenseList = (props) => (
  <Table selectable={false}>
    <TableHeader>
      <TableRow>
        <TableHeaderColumn>DATE</TableHeaderColumn>
        <TableHeaderColumn>AMOUNT</TableHeaderColumn>
        <TableHeaderColumn>CATEGORY</TableHeaderColumn>
        <TableHeaderColumn>LOCATION</TableHeaderColumn>
      </TableRow>
    </TableHeader>
    <TableBody>
      {props.expenses.map(expense => (
        <TableRow key={expense._id}>
          <TableRowColumn>{moment(expense.createdAt).format("MMM Do YY")}</TableRowColumn>
          <TableRowColumn>${expense.amount}</TableRowColumn>
          <TableRowColumn>
            {expense.category === 'Travel' ? <FontIcon className="material-icons" color={"#4A83FA"}>flight_land</FontIcon> : ''}
            {expense.category === 'Coffee' ? <FontIcon className="material-icons" color={"#00704a"}>free_breakfast</FontIcon> : ''}
            {expense.category === 'Rent' ? <FontIcon className="material-icons" color={"#F55D60"}>home</FontIcon> : ''}
            {expense.category === 'Food' ? <FontIcon className="material-icons" color={"#17BEBB"}>restaurant</FontIcon> : ''}
            {expense.category === 'Alcohol' ? <FontIcon className="material-icons" color={"#FF6B35"}>local_drink</FontIcon> : ''}
          </TableRowColumn>
          <TableRowColumn>{expense.location}</TableRowColumn>
        </TableRow>
      ))}
    </TableBody>
  </Table>
)

const mapStateToProps = state => ({
  expenses: state.expenseReducer.expenses
})

export default connect(mapStateToProps)(ExpenseList)
