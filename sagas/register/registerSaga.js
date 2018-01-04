import { put, call } from 'redux-saga/effects'
import { registerData } from '../../api/api'
import * as types from '../../constants/actionTypes'

export function* getRegister({payload}) {
  try {
    const register = yield call(registerData, payload)
    yield put({type: types.REGISTER_SUCCESS, register})
  } catch (error) {
    yield put({type: types.REGISTER_ERROR, error})
  }
}
