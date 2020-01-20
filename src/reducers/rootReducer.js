import { combineReducers } from 'redux'
import userNameReducer from './userNameReducer'
import todoEmailReducer from './todoEmailReducer'


export default combineReducers({
  userNameReducer,
  todoEmailReducer
})
