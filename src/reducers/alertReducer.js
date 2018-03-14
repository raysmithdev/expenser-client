const initialState = {
  showAlert: false,
  feedback: ''
}

const alertReducer = (state = initialState, action) => {
  switch(action.type) {
    case 'TOGGLE_ALERT':
      return {
        ...state,
        showAlert: !state.showAlert,
        feedback: 'Expense created successfully'
      }

    default:
      return state
  }
}

export default alertReducer
