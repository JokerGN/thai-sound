import initialState from '../initialState'
import * as types from '../../constants/actionTypes'

export default function (state = initialState.userList, action) {
  switch (action.type) {
    case types.GET_USER_SUCCESS:
      return {...state, data: action.user}
    case types.GET_USER_ERROR:
      return {...state, data: {
        status: action.error.response.status,
        message: action.error.response.statusText
      }}
    default:
      return state
  }
}
