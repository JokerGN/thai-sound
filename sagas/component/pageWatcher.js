import { put, takeLatest } from 'redux-saga/effects'
import * as types from '../../constants/actionTypes'

export default function* watchPage() {
  yield takeLatest(types.MAIN_REQUEST, function* index() {
    let page = 'main'
    yield put({type: types.MAIN_SUCCESS, page})
  })
  yield takeLatest(types.INFO_REQUEST, function* info() {
    let page = 'info'
    yield put({type: types.INFO_SUCCESS, page})
  })
  yield takeLatest(types.LOGIN_PAGE_REQUEST, function* login() {
    let page = 'login'
    yield put({type: types.LOGIN_PAGE_SUCCESS, page})
  })
  yield takeLatest(types.REGISTER_PAGE_REQUEST, function* register() {
    let page = 'register'
    yield put({type: types.REGISTER_PAGE_SUCCESS, page})
  })
}
