import { combineReducers } from 'redux'
import user from './user'
import register from './register'
import component from './component'
import get_user from './get_user'

const rootReducer = combineReducers ({
  user,
  register,
  component,
  get_user
})

export default rootReducer
