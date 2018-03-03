import initialState from '../initialState'
import * as types from '../../constants/actionTypes'

export default function (state = initialState.delete_sound, action) {
  switch (action.type) {
    case types.DELETE_SOUND_SUCCESS:
      return {...state, data: action.delete_sound}
    case types.DELETE_SOUND_ERROR:
      return {...state, data: {
        status: action.error.response.status,
        message: action.error.response.statusText
      }}
    case types.CLEAR_DELETE_SOUND_DATA_SUCCESS:
      return {...state, data: action.delete_sound}
    default:
      return state
  }
}
