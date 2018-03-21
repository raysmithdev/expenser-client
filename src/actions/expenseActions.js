import { API_BASE_URL } from '../config'
import { toggleAlert } from './alertActions'

export const createExpense = (expense) => dispatch => {
  fetch(`${API_BASE_URL}/expense/${localStorage.getItem('userId')}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${localStorage.getItem('authToken')}`
    },
    body: JSON.stringify(expense)
  })
  .then(res => res.json())
  .then(response => {
    dispatch(fetchExpenses())
    setTimeout(() => {
      console.log('Made it');
      dispatch(toggleAlert())
    }, 3000)
  })
  .catch(error => console.log(error))
}


export const fetchExpenses = () => dispatch => {
  fetch(`${API_BASE_URL}/expense/${localStorage.getItem('userId')}`, {
    headers: {
      'Authorization': `Bearer ${localStorage.getItem('authToken')}`
    }
  })
  .then(res => res.json())
  .then(expenses => {

    expenses.sort((a,b) => {
      if(a.createdAt < b.createdAt) {
        return 1
      }
      if(a.createdAt > b.createdAt) {
        return -1
      }
        return 0
    })

    dispatch(fetchExpensesSuccess(expenses))
  })
  .catch(error => console.log(error))
}

const FETCH_EXPENSES_SUCCESS = 'FETCH_EXPENSES_SUCCESS'
export const fetchExpensesSuccess = expenses => ({
  type: FETCH_EXPENSES_SUCCESS,
  expenses
})

const TOGGLE_ADD_EXPENSE_FORM = 'TOGGLE_ADD_EXPENSE_FORM'
export const toggleAddExpenseForm = () => ({
  type: TOGGLE_ADD_EXPENSE_FORM
})

const TOGGLE_EDIT_EXPENSE_FORM = 'TOGGLE_EDIT_EXPENSE_FORM'
export const toggleEdiExpenseForm = expense => ({
  type: TOGGLE_EDIT_EXPENSE_FORM,
  expense
})

const FILTER_EXPENSES = 'FILTER_EXPENSES'
export const filterExpenses = (startDate, endDate, filterBy, filterResultsTitle) => ({
  type: FILTER_EXPENSES,
  startDate,
  endDate,
  filterBy,
  filterResultsTitle
})
