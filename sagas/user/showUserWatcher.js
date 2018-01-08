import { takeLatest } from 'redux-saga/effects'
import { showUser } from './showUserSaga'
import * as types from '../../constants/actionTypes'

export default function* watchShowUser() {
    yield takeLatest(types.GET_USER_REQUEST, showUser)
}
