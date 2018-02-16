import * as types from '../constants/actionTypes'

export const getUserAction = () => ({
  type: types.GET_USER_REQUEST
})

export const changeStatusAction = (payload) => ({
  type: types.CHANGE_STATUS_REQUEST,
  payload: payload
})
