import initialState from '../initialState'
import * as types from '../../constants/actionTypes'

export default function (state = initialState.add_sound, action) {
  switch (action.type) {
    case types.ADD_SOUND_SUCCESS:
      return {...state, data: action.add_sound}
    case types.ADD_SOUND_ERROR:
      return {...state, data: {
        status: action.error.response.status,
        message: action.error.response.statusText
      }}
    case types.CLEAR_ADD_SOUND_DATA_SUCCESS:
      return {...state, data: action.add_sound}
    default:
      return state
  }
}
