import { takeLatest } from 'redux-saga/effects'
import { showSound } from './showSoundSaga'
import * as types from '../../constants/actionTypes'

export default function* watchShowSound() {
    yield takeLatest(types.GET_SOUND_REQUEST, showSound)
}
