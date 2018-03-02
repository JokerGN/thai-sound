import * as types from '../constants/actionTypes'

export const getFeelingAction = (payload) => ({
  type: types.GET_FEELING_REQUEST,
  payload: payload
})
