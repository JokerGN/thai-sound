import { takeLatest } from 'redux-saga/effects'
import { getUser } from './userSaga'
import * as types from '../../constants/actionTypes'

export default function* watchUser() {
  yield takeLatest(types.LOGIN_REQUEST, getUser)
}
