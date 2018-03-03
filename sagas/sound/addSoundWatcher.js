import { put, takeLatest } from 'redux-saga/effects'
import { addSound } from './addSoundSaga'
import * as types from '../../constants/actionTypes'

export default function* watchAddSound() {
    yield takeLatest(types.ADD_SOUND_REQUEST, addSound)
    yield takeLatest(types.CLEAR_ADD_SOUND_DATA_REQUEST,  function* clearAddSound() {
      let add_sound = 0
      yield put({type: types.CLEAR_ADD_SOUND_DATA_SUCCESS, add_sound})
    })
}
