import initialState from '../initialState'
import * as types from '../../constants/actionTypes'

export default function (state = initialState.update_sound, action) {
  switch (action.type) {
    case types.UPDATE_SOUND_SUCCESS:
      return {...state, data: action.update_sound}
    case types.UPDATE_SOUND_ERROR:
      return {...state, data: {
        status: action.error.response.status,
        message: action.error.response.statusText
      }}
    case types.CLEAR_UPDATE_SOUND_DATA_SUCCESS:
      return {...state, data: action.update_sound}
    default:
      return state
  }
}
