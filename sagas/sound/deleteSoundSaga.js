import { put, call } from 'redux-saga/effects'
import { deleteSoundData } from '../../api/api'
import * as types from '../../constants/actionTypes'

export function* deleteSound({payload}) {
  try {
    const delete_sound = yield call(deleteSoundData, payload)
    yield put({type: types.DELETE_SOUND_SUCCESS, delete_sound})
  } catch (error) {
    yield put({type: types.DELETE_SOUND_ERROR, error})
  }
}
