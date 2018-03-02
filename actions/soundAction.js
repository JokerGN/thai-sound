import * as types from '../constants/actionTypes'

export const addSoundAction = (payload) => ({
  type: types.ADD_SOUND_REQUEST,
  payload: payload
})

export const clearAddSoundData = () => ({
  type: types.CLEAR_ADD_SOUND_DATA_REQUEST
})

export const deleteSoundAction = (payload) => ({
  type: types.DELETE_SOUND_REQUEST,
  payload: payload
})

export const clearDeleteSoundData = () => ({
  type: types.CLEAR_DELETE_SOUND_DATA_REQUEST
})