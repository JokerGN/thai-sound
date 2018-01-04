import initialState from '../initialState'
import * as types from '../../constants/actionTypes'

export default function (state = initialState.register, action) {
  switch (action.type) {
    case types.REGISTER_SUCCESS:
      return {...state, data: action.register}
    case types.REGISTER_ERROR:
      return {...state, data: {
        status: action.error.response.status,
        message: JSON.parse(action.error.response.statusText)
      }}
    default:
      return state
  }
}
