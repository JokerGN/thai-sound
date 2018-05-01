import initialState from '../initialState'
import * as types from '../../constants/actionTypes'

export default function (state = initialState.sound_analysis, action) {
  switch (action.type) {
    case types.GET_SOUND_ANALYSIS_SUCCESS:
      return {...state, data: action.sound_analysis}
    case types.GET_SOUND_ANALYSIS_ERROR:
      return {...state, data: {
        status: action.error.response.status,
        message: action.error.response.statusText
      }}
    default:
      return state
  }
}
