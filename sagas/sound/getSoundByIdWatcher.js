import { takeLatest } from 'redux-saga/effects'
import { getSound } from './getSoundByIdSaga'
import * as types from '../../constants/actionTypes'

export default function* watchGetSound() {
    yield takeLatest(types.GET_SOUND_BY_ID_REQUEST, getSound)
}
