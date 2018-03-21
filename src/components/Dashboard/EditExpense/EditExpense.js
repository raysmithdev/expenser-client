import React, { Component } from 'react'
import { connect } from 'react-redux'
import { createExpense, toggleEdiExpenseForm } from '../../../actions/expenseActions'
import TextField from 'material-ui/TextField'
import DatePicker from 'material-ui/DatePicker';
import Dialog from 'material-ui/Dialog'
import FlatButton from 'material-ui/FlatButton'
import SelectField from 'material-ui/SelectField'
import MenuItem from 'material-ui/MenuItem'
import moment from 'moment'

class EditExpense extends Component {

  constructor(props) {
    super(props)
    // console.log(props);
    this.state = {
      amount: props.expense.amount,
      category: props.expense.category,
      location: props.expense.location,
      date: props.expense.createdAt,
      owner: props.expense.owner,
      workExpense: props.expense.workExpense
    }
  }

  componentWillReceiveProps(newProps) {
    this.setState({
      amount: newProps.expense.amount,
      category: newProps.expense.category,
      location: newProps.expense.location,
      date: newProps.expense.createdAt,
      owner: newProps.expense.owner,
      workExpense: newProps.expense.workExpense
    })
  }

  render() {
    const actions = [
      <FlatButton
        label="CANCEL"
        secondary={true}
        onClick={() => this.props.dispatch(toggleEdiExpenseForm({}))}
      />,
      <FlatButton
        label="UPDATE"
        primary={true}
        keyboardFocused={true}
        onClick={() => this.props.dispatch(createExpense(this.state))}
      />,
    ];


    return (
      <div>
          <Dialog
           title="Edit expense"
           actions={actions}
           modal={false}
           open={this.props.showForm}
           onRequestClose={this.handleClose}
         >
           <form className="AddExpenseForm">
             <TextField hintText="Amount" name="amount" ref={el => this.amount = el} onChange={(event, amount) => this.setState({ amount })} value={this.state.amount}/>
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
             <SelectField
                floatingLabelText="Owner"
                value={this.state.owner}
                onChange={(event, key, owner) => this.setState({ owner })}
              >
                <MenuItem value={"Ray"} primaryText="Ray" />
                <MenuItem value={"Other"} primaryText="Other" />
              </SelectField>
              <br />
              <SelectField
                 floatingLabelText="Work expense"
                 value={this.state.workExpense}
                 onChange={(event, key, workExpense) => this.setState({ workExpense })}
               >
                 <MenuItem value={true} primaryText="Yes" />
                 <MenuItem value={false} primaryText="No" />
               </SelectField>
               <br />
             <TextField hintText="Location" name="location"ref={el => this.location = el} onChange={(event, location) => this.setState({ location })} value={this.state.location} />
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
  showForm: state.expenseReducer.showEditExpenseForm,
  expense: state.expenseReducer.selectedExpense
})

export default connect(mapStateToProps)(EditExpense)
