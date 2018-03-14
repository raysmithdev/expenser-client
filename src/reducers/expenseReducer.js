const initialState = {
  expenses: [],
  showForm: false,
  total: 0,
  filterResultsTitle: ''
}

const expenseReducer = (state = initialState, action) => {
  switch(action.type) {
    case 'FETCH_EXPENSES_SUCCESS':
      return {
        ...state,
        expenses: action.expenses,
        showForm: false
      }

    case 'TOGGLE_ADD_EXPENSE_FORM':
      return {
        ...state,
        showForm: !state.showForm
      }

    case 'FILTER_EXPENSES':

      let expenses = []
      let filterResultsTitle = ''

      // filter out the results
      if(action.filterBy === 'today') {
        expenses = state.expenses.filter(expense => action.startDate >= expense.createdAt && action.endDate <= expense.createdAt)
      } else if(action.filterBy === 'weekly') {
        expenses = state.expenses.filter(expense => expense.createdAt >= action.startDate  &&  expense.createdAt < action.endDate)
      } else if(action.filterBy === 'month') {
        expenses = state.expenses.filter(expense => expense.createdAt > action.startDate  &&  expense.createdAt <= action.endDate)
        filterResultsTitle = action.filterResultsTitle
      }

      let total = 0

      // total the amount spent based on filter
      expenses.forEach(expense => total += Number(expense.amount))

      return {
        ...state,
        expenses,
        total,
        filterResultsTitle
      }

    default:
      return state
  }
}

export default expenseReducer
