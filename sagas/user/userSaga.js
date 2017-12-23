import { put, call } from 'redux-saga/effects'
import { userData } from '../../api/api'
import * as types from '../../constants/actionTypes'

export function* getUser({payload}) {
  try {
    const user = yield call(userData, payload)
    yield put({type: types.LOGIN_SUCCESS, user})
  } catch (error) {
    yield put({type: types.LOGIN_ERROR, error})
  }
}
