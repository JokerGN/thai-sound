import { put, takeLatest, takeEvery } from 'redux-saga/effects'
import * as types from '../../constants/actionTypes'

export default function* watchComponent() {
  yield takeLatest(types.INDEX_REQUEST, function* index() {
    let component = 'index'
    yield put({type: types.INDEX_SUCCESS, component})
  })
  yield takeLatest(types.SOUND_REQUEST, function* sound() {
    let component = 'sound'
    yield put({type: types.SOUND_SUCCESS, component})
  })
  yield takeLatest(types.USER_REQUEST, function* user() {
    let component = 'user'
    yield put({type: types.USER_SUCCESS, component})
  })
  yield takeLatest(types.INSERT_REQUEST, function* insert() {
    let component = 'insert'
    yield put({type: types.INSERT_SUCCESS, component})
  })
}
