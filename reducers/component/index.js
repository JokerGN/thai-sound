import initialState from '../initialState'
import * as types from '../../constants/actionTypes'

export default function (state = initialState.component, action) {
  switch (action.type) {
    case types.INDEX_SUCCESS:
      return state = action.component
    case types.SOUND_SUCCESS:
      return state = action.component
    case types.USER_SUCCESS:
      return state = action.component
    case types.INSERT_SUCCESS:
      return state = action.component
    case types.EDIT_SOUND_SUCCESS:
      return state = action.component
    default:
      return state
  }
}
