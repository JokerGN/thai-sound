import { combineReducers } from 'redux'
import user from './user'
import register from './register'
import component from './component'

const rootReducer = combineReducers ({
  user,
  register,
  component
})

export default rootReducer
