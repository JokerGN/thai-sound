import { combineReducers } from 'redux'
import user from './user'
import register from './register'
import component from './component'
import get_user from './get_user'
import change_status from './change_status'
import get_sound from './sound'
import add_sound from './add_sound'
import delete_sound from './delete_sound'
import search_sound from './search_sound'
import page from './page'
import type from './get_type'
import feeling from './get_feeling'

const rootReducer = combineReducers ({
  user,
  register,
  component,
  get_user,
  change_status,
  get_sound,
  add_sound,
  delete_sound,
  search_sound,
  page,
  type,
  feeling
})

export default rootReducer
