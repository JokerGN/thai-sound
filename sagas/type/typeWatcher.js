import { takeLatest } from 'redux-saga/effects'
import { showTypeSaga } from './typeSaga'
import * as types from '../../constants/actionTypes'

export default function* watchType() {
    yield takeLatest(types.GET_TYPE_REQUEST, showTypeSaga)
}
