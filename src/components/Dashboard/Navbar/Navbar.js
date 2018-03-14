import React, { Component } from 'react'
import FontIcon from 'material-ui/FontIcon'
import MenuItem from 'material-ui/MenuItem'
import DropDownMenu from 'material-ui/DropDownMenu'
import RaisedButton from 'material-ui/RaisedButton'
import {Toolbar, ToolbarGroup, ToolbarSeparator} from 'material-ui/Toolbar'
import { connect } from 'react-redux'
import { logoutUser } from '../../../actions/authActions'
import { toggleAddExpenseForm, filterExpenses} from '../../../actions/expenseActions'
import moment from 'moment'
import Subheader from 'material-ui/Subheader'


class Navbar extends Component {

  constructor(props) {
    super(props);
    this.state = {
      value: "Filter",
    };
  }

  handleChange = (event, index, value) => {
    if(value === 'Today') {
      this.props.dispatch(filterExpenses(moment().format('YYYY-MM-DD'), moment().format('YYYY-MM-DD'), 'today'))
    } else if(value === 'Weekly') {
      this.props.dispatch(filterExpenses(moment().startOf('isoWeek').format('YYYY-MM-DD'), moment().endOf('isoWeek').format('YYYY-MM-DD'), 'weekly'))
    } else {
      this.props.dispatch(filterExpenses(moment().startOf('month').format('YYYY-MM-DD'), moment().endOf('month').format('YYYY-MM-DD'), 'month', moment().startOf('month').format('MMMM-YYYY')))
    }
  }

  render() {
    return (
      <Toolbar style={{backgroundColor: '#F6CE6F'}}>
        <ToolbarGroup firstChild={true}>
          <DropDownMenu value={this.state.value} onChange={this.handleChange}>
            <MenuItem value={"Filter"} primaryText="Filter by" />
            <MenuItem value={"Today"} primaryText="Today" />
            <MenuItem value={"Weekly"} primaryText="Weekly" />
            <MenuItem value={"Month"} primaryText="Month" />
          </DropDownMenu>
          {this.props.filterResultsTitle !== '' ? <Subheader style={{ marginTop: '7px' }}>Showing results for: {this.props.filterResultsTitle} & Total spent: $ {this.props.expenseTotal}</Subheader>  : ''}
        </ToolbarGroup>
        <ToolbarGroup>
          <FontIcon className="muidocs-icon-custom-sort" />
          <ToolbarSeparator />
          <RaisedButton backgroundColor='#F55D60' label="Create" onClick={() => this.props.dispatch(toggleAddExpenseForm())}/>
          <RaisedButton backgroundColor='#F55D60' label="Logout" onClick={() => this.props.dispatch(logoutUser())}/>
        </ToolbarGroup>
      </Toolbar>
    );
  }
}

const mapStateToProps = state => ({
  filterResultsTitle: state.expenseReducer.filterResultsTitle,
  expenseTotal: state.expenseReducer.total
})

export default connect(mapStateToProps)(Navbar)
