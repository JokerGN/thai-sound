import { put, takeLatest, takeEvery } from 'redux-saga/effects'
import * as types from '../../constants/actionTypes'

export default function* watchPage() {
  yield takeLatest(types.MAIN_REQUEST, function* index() {
    let page = 'main'
    yield put({type: types.MAIN_SUCCESS, page})
  })
  yield takeLatest(types.INFO_REQUEST, function* sound() {
    let page = 'page'
    yield put({type: types.INFO_SUCCESS, page})
  })
}
