import React, { Component } from 'react'
import { connect } from 'react-redux'
import DatePicker from 'material-ui/DatePicker'
import RaisedButton from 'material-ui/RaisedButton'
import './ExpenseSearch.css'
import { filterExpenses } from '../../../actions/expenseActions'
import moment from 'moment'

class ExpenseSearch extends Component {

  state = {
    from: '',
    to: ''
  }

  render() {
    return (
      <div className="EventSearchContainer">
        <DatePicker autoOk={true} hintText="From" onChange={(event, from) => this.setState({ from: moment(from).format('YYYY-MM-DD'), })}/>
        <DatePicker autoOk={true} hintText="To" onChange={(event, to) => this.setState({ to: moment(to).format('YYYY-MM-DD'),})} />
        <RaisedButton label="Create" onClick={() => this.props.dispatch(filterExpenses(this.state.from, this.state.to, 'custom', ''))}/>
      </div>
    );
  }
}

export default connect()(ExpenseSearch);
