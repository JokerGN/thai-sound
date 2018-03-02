import { put, takeLatest } from 'redux-saga/effects'
import { deleteSound } from './deleteSoundSaga'
import * as types from '../../constants/actionTypes'

export default function* watchDeleteSound() {
    yield takeLatest(types.DELETE_SOUND_REQUEST, deleteSound)
    yield takeLatest(types.CLEAR_DELETE_SOUND_DATA_REQUEST,  function* clearDeleteSound() {
      let delete_sound = 0
      yield put({type: types.CLEAR_DELETE_SOUND_DATA_SUCCESS, delete_sound})
    })
}
