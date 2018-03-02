import { put, call } from 'redux-saga/effects'
import { getSoundById } from '../../api/api'
import * as types from '../../constants/actionTypes'

export function* getSound({payload}) {
  try {
    const get_sound_by_id = yield call(getSoundById, payload)
    yield put({type: types.GET_SOUND_BY_ID_SUCCESS, get_sound_by_id})
  } catch (error) {
    yield put({type: types.GET_SOUND_BY_ID_ERROR, error})
  }
}
