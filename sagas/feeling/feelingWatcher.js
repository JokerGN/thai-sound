import { takeLatest, takeEvery } from 'redux-saga/effects'
import { getFeeling } from './feelingSaga'
import * as types from '../../constants/actionTypes'

export default function* watchFeeling() {
    yield takeLatest(types.GET_FEELING_REQUEST, getFeeling)
}
