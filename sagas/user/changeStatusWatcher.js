import { takeLatest } from 'redux-saga/effects'
import { changeStatus } from './changeStatusSaga'
import * as types from '../../constants/actionTypes'

export default function* watchChangeStatus() {
    yield takeLatest(types.CHANGE_STATUS_REQUEST, changeStatus)
}
