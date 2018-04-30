import initialState from '../initialState'
import * as types from '../../constants/actionTypes'

export default function (state = initialState.get_sound, action) {
  switch (action.type) {
    case types.GET_SOUND_BY_ID_SUCCESS:
      return {...state, data: action.get_sound_by_id}
    case types.GET_SOUND_BY_ID_ERROR:
      return {...state, data: {
        status: action.error.response.status,
        message: action.error.response.statusText
      }}
    default:
      return state
  }
}
