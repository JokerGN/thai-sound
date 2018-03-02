import { takeLatest } from 'redux-saga/effects'
import { addSound } from './addSoundSaga'
import * as types from '../../constants/actionTypes'

export default function* watchAddSound() {
    yield takeLatest(types.ADD_SOUND_REQUEST, addSound)
}
