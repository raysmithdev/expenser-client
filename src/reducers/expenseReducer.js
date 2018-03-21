const initialState = {
  expenses: [],
  filteredExpenses: [],
  selectedExpense: {},
  showForm: false,
  showEditExpenseForm: false,
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

    case 'TOGGLE_EDIT_EXPENSE_FORM':
      return {
        ...state,
        selectedExpense: action.expense,
        showEditExpenseForm: !state.showEditExpenseForm
      }

    case 'FILTER_EXPENSES':

      let filteredExpenses = []
      let filterResultsTitle = ''

      // filter out the results
      if(action.filterBy === 'today') {
        filteredExpenses = state.expenses.filter(expense => action.startDate >= expense.createdAt && action.endDate <= expense.createdAt)
      } else if(action.filterBy === 'weekly') {
        filteredExpenses = state.expenses.filter(expense => expense.createdAt >= action.startDate  &&  expense.createdAt < action.endDate)
      } else if(action.filterBy === 'month') {
        filteredExpenses = state.expenses.filter(expense => expense.createdAt > action.startDate  &&  expense.createdAt <= action.endDate)
        filterResultsTitle = action.filterResultsTitle
      } else if(action.filterBy === 'custom') {
        filteredExpenses = state.expenses.filter(expense => expense.createdAt >= action.startDate  &&  expense.createdAt <= action.endDate)
      }

      let total = 0

      // total the amount spent based on filter
      filteredExpenses.forEach(expense => total += Number(expense.amount))

      return {
        ...state,
        filteredExpenses,
        total,
        filterResultsTitle
      }

    default:
      return state
  }
}

export default expenseReducer
