import * as types from '../constants/actionTypes'

export const getSoundAction = (payload) => ({
  type: types.GET_SOUND_REQUEST,
  payload: payload
})

export const getSoundAnalysisAction = () => ({
  type: types.GET_SOUND_ANALYSIS_REQUEST
})

export const getSoundByIdAction = (payload) => ({
  type: types.GET_SOUND_BY_ID_REQUEST,
  payload: payload
})
