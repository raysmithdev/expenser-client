import { combineReducers } from 'redux'
import user from './userReducer'
import expenseReducer from './expenseReducer'
import alertReducer from './alertReducer'

const rootReducer = combineReducers({
  user,
  expenseReducer,
  alertReducer
})

export default rootReducer
