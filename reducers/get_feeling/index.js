import initialState from '../initialState'
import * as types from '../../constants/actionTypes'

export default function (state = initialState.feeling, action) {
  switch (action.type) {
    case types.GET_FEELING_SUCCESS:
      return {...state, data: action.feeling}
    case types.GET_FEELING_ERROR:
      return {...state, data: {
        status: action.error.response.status,
        message: action.error.response.statusText
      }}
    default:
      return state
  }
}
