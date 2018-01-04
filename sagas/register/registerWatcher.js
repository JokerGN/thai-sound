import { takeLatest, takeEvery } from 'redux-saga/effects'
import { getRegister } from './registerSaga'
import * as types from '../../constants/actionTypes'

export default function* watchRegister() {
    yield takeLatest(types.REGISTER_REQUEST, getRegister)
}
