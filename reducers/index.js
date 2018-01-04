import { combineReducers } from 'redux'
import user from './user'
import register from './register'

const rootReducer = combineReducers ({
  user,
  register
})

export default rootReducer
