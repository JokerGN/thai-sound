import * as types from '../constants/actionTypes'

export const loginAction = (payload) => ({
  type: types.LOGIN_REQUEST,
  payload
})
