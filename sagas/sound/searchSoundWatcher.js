import { takeLatest } from 'redux-saga/effects'
import { searchSound } from './searchSoundSaga'
import * as types from '../../constants/actionTypes'

export default function* watchSearchSound() {
    yield takeLatest(types.SEARCH_SOUND_REQUEST, searchSound)
}
