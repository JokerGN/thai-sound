import { put, call } from 'redux-saga/effects'
import { searchSoundData } from '../../api/api'
import * as types from '../../constants/actionTypes'

export function* searchSound({payload}) {
  try {
    const searchsound = yield call(searchSoundData, payload)
    yield put({type: types.SEARCH_SOUND_SUCCESS, searchsound})
  } catch (error) {
    yield put({type: types.SEARCH_SOUND_ERROR, error})
  }
}
