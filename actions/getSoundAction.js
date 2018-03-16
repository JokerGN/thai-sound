import * as types from '../constants/actionTypes'

export const getSoundAction = () => ({
  type: types.GET_SOUND_REQUEST
})

export const getSoundByIdAction = (payload) => ({
  type: types.GET_SOUND_BY_ID_REQUEST,
  payload: payload
})
