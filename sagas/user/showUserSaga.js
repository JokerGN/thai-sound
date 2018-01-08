import { put, call } from 'redux-saga/effects'
import { getUserData } from '../../api/api'
import * as types from '../../constants/actionTypes'

export function* showUser() {
  try {
    const user = yield call(getUserData)
    yield put({type: types.GET_USER_SUCCESS, user})
  } catch (error) {
    yield put({type: types.GET_USER_ERROR, error})
  }
}
