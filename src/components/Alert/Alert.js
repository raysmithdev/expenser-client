import React, { Component } from 'react'
import Snackbar from 'material-ui/Snackbar'
import { connect } from 'react-redux'

class Alert extends Component {
  render() {
    return (
      <Snackbar
        open={this.props.showAlert}
        message={this.props.feedback}
        autoHideDuration={4000}
        onRequestClose={this.handleRequestClose}
      />
    );
  }
}

const mapStateToProps = state => ({
  showAlert: state.alertReducer.showAlert,
  feedback: state.alertReducer.feedback
})

export default connect(mapStateToProps)(Alert)
