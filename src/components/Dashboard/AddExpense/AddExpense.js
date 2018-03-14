import React, { Component } from 'react'
import { connect } from 'react-redux'
import { createExpense, toggleAddExpenseForm } from '../../../actions/expenseActions'
import TextField from 'material-ui/TextField'
import './AddExpense.css'
import DatePicker from 'material-ui/DatePicker';
import Dialog from 'material-ui/Dialog'
import FlatButton from 'material-ui/FlatButton'
import SelectField from 'material-ui/SelectField'
import MenuItem from 'material-ui/MenuItem'
import moment from 'moment'

class AddExpense extends Component {

  constructor() {
    super()

    this.state = {
      amount: 0,
      category: '',
      location: '',
      date: ''
    }
  }

  render() {

    const actions = [
      <FlatButton
        label="Cancel"
        secondary={true}
        onClick={() => this.props.dispatch(toggleAddExpenseForm())}
      />,
      <FlatButton
        label="Create"
        primary={true}
        keyboardFocused={true}
        onClick={() => this.props.dispatch(createExpense(this.state))}
      />,
    ];


    return (
      <div>
          <Dialog
           title="Create expense"
           actions={actions}
           modal={false}
           open={this.props.showForm}
           onRequestClose={this.handleClose}
         >
           <form className="AddExpenseForm">
             <TextField hintText="Amount" name="amount" ref={el => this.amount = el} onChange={(event, amount) => this.setState({ amount })}/>
             <br />
             <SelectField
                floatingLabelText="Category"
                value={this.state.category}
                onChange={(event, key, category) => this.setState({ category })}
              >
                <MenuItem value={"Food"} primaryText="Food" />
                <MenuItem value={"Coffee"} primaryText="Coffee" />
                <MenuItem value={"Travel"} primaryText="Travel" />
                <MenuItem value={"Office"} primaryText="Office" />
                <MenuItem value={"Alcohol"} primaryText="Alcohol" />
                <MenuItem value={"Rent"} primaryText="Rent" />
              </SelectField>
             <br />
             <TextField hintText="Location" name="location"ref={el => this.location = el} onChange={(event, location) => this.setState({ location })} />
             <br />
             <DatePicker hintText="Date" autoOk={true} ref={el => this.date = el} onChange={(event, date) => this.setState({ date: moment(date).format('YYYY-MM-DD') })} />
             <br />
           </form>
         </Dialog>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  showForm: state.expenseReducer.showForm
})

export default connect(mapStateToProps)(AddExpense)
