import initialState from '../initialState'
import * as types from '../../constants/actionTypes'

export default function (state = initialState.soundList, action) {
  switch (action.type) {
    case types.SEARCH_SOUND_SUCCESS:
      return {...state, data: action.searchsound}
    case types.SEARCH_SOUND_ERROR:
      return {...state, data: {
        status: action.error.response.status,
        message: action.error.response.statusText
      }}
    default:
      return state
  }
}
