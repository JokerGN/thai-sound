import { combineReducers } from 'redux'
import user from './user'
import register from './register'
import component from './component'
import get_user from './get_user'
import change_status from './change_status'
import get_sound from './sound'

const rootReducer = combineReducers ({
  user,
  register,
  component,
  get_user,
  change_status,
  get_sound
})

export default rootReducer
