import { put, call } from 'redux-saga/effects'
import { addSoundData } from '../../api/api'
import * as types from '../../constants/actionTypes'

export function* addSound({payload}) {
  try {
    const add_sound = yield call(addSoundData, payload)
    yield put({type: types.ADD_SOUND_SUCCESS, add_sound})
  } catch (error) {
    yield put({type: types.ADD_SOUND_ERROR, error})
  }
}
