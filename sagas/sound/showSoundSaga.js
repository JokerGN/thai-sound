import { put, call } from 'redux-saga/effects'
import { getSoundData } from '../../api/api'
import * as types from '../../constants/actionTypes'

export function* showSound({payload}) {
  try {
    const sound = yield call(getSoundData, payload)
    yield put({type: types.GET_SOUND_SUCCESS, sound})
  } catch (error) {
    yield put({type: types.GET_SOUND_ERROR, error})
  }
}
