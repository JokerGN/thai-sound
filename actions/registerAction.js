import * as types from '../constants/actionTypes'

export const registerAction = (payload) => ({
  type: types.REGISTER_REQUEST,
  payload
})
