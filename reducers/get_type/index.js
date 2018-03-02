import initialState from '../initialState'
import * as types from '../../constants/actionTypes'

export default function (state = initialState.type, action) {
  switch (action.type) {
    case types.GET_TYPE_SUCCESS:
      return {...state, data: action.get_type}
    case types.GET_TYPE_ERROR:
      return {...state, data: {
        status: action.error.response.status,
        message: action.error.response.statusText
      }}
    default:
      return state
  }
}
