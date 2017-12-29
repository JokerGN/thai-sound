import initialState from '../initialState'
import * as types from '../../constants/actionTypes'

export default function (state = initialState.user, action) {
  switch (action.type) {
    case types.LOGIN_SUCCESS:
      return {...state, data: action.user}
    case types.LOGIN_ERROR:
      return {...state, data: {
        status: action.error.response.status,
        message: action.error.response.statusText
      }}
    case types.LOGOUT_SUCCESS:
      return state = []
    default:
      return state
  }
}
