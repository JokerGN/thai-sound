import initialState from '../initialState'
import * as types from '../../constants/actionTypes'

export default function (state = initialState.user, action) {
  switch (action.types) {
    case types.LOGIN_SUCCESS:
      return Object.assign({}, ...state,{data: action.user})
    default:
      return state
  }
}
