import initialState from '../initialState'
import * as types from '../../constants/actionTypes'

export default function (state = initialState.page, action) {
  switch (action.type) {
    case types.MAIN_SUCCESS:
      return state = action.page
    case types.INFO_SUCCESS:
      return state = action.page
    case types.LOGIN_PAGE_SUCCESS:
      return state = action.page
    case types.REGISTER_PAGE_SUCCESS:
      return state = action.page
    default:
      return state
  }
}
