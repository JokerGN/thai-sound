import { put, call } from 'redux-saga/effects'
import { updateSoundData } from '../../api/api'
import * as types from '../../constants/actionTypes'

export function* updateSound({payload}) {
  try {
    const update_sound = yield call(updateSoundData, payload)
    yield put({type: types.UPDATE_SOUND_SUCCESS, update_sound})
  } catch (error) {
    yield put({type: types.UPDATE_SOUND_ERROR, error})
  }
}
