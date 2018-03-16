import * as types from '../constants/actionTypes'

export const selectIndexAction = () => ({
  type: types.INDEX_REQUEST
})

export const selectSoundAction = () => ({
  type: types.SOUND_REQUEST
})

export const selectUserAction = () => ({
  type: types.USER_REQUEST
})

export const selectInsertAction = () => ({
  type: types.INSERT_REQUEST
})

export const selectEditAction = (payload) => ({
  type: types.EDIT_SOUND_REQUEST,
  payload: payload
})

export const selectMainAction = () => ({
  type: types.MAIN_REQUEST
})

export const selectInfoAction = () => ({
  type: types.INFO_REQUEST
})

export const selectLoginAction = () => ({
  type: types.LOGIN_PAGE_REQUEST
})

export const selectRegisterAction = () => ({
  type: types.REGISTER_PAGE_REQUEST
})
