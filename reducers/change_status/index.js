import initialState from '../initialState'
import * as types from '../../constants/actionTypes'

export default function (state = initialState.changeStatus, action) {
  switch (action.type) {
    case types.CHANGE_STATUS_SUCCESS:
      return {...state, data: action.changestatus}
    case types.CHANGE_STATUS_ERROR:
      return {...state, data: {
        status: action.error.response.status,
        message: action.error.response.statusText
      }}
    default:
      return state
  }
}
