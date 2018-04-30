import { put, takeLatest } from 'redux-saga/effects'
import { updateSound } from './updateSoundSaga'
import * as types from '../../constants/actionTypes'

export default function* watchUpdateSound() {
    yield takeLatest(types.UPDATE_SOUND_REQUEST, updateSound)
    yield takeLatest(types.CLEAR_UPDATE_SOUND_DATA_REQUEST,  function* clearUpdateSound() {
      let update_sound = 0
      yield put({type: types.CLEAR_UPDATE_SOUND_DATA_SUCCESS, update_sound})
    })
}
