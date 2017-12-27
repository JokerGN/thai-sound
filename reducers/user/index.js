import initialState from '../initialState'
import * as types from '../../constants/actionTypes'

export default function (state = initialState.user, action) {
  switch (action.type) {
    case types.LOGIN_SUCCESS:
      return {...state, data: action.user}
    default:
      return state
  }
}
