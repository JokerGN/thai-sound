import { put, takeLatest, takeEvery } from 'redux-saga/effects'
import { getUser } from './userSaga'
import * as types from '../../constants/actionTypes'

export default function* watchUser() {
    yield takeLatest(types.LOGIN_REQUEST, getUser)
    yield takeLatest(types.LOGOUT_REQUEST, function* deleteUser() {
      yield put({type: types.LOGOUT_SUCCESS})
    })
}
