import { put, call } from 'redux-saga/effects'
import { getSoundAnalysis } from '../../api/api'
import * as types from '../../constants/actionTypes'

export function* soundAnalysis() {
  try {
    const sound_analysis = yield call(getSoundAnalysis)
    yield put({type: types.GET_SOUND_ANALYSIS_SUCCESS, sound_analysis})
  } catch (error) {
    yield put({type: types.GET_SOUND_ANALYSIS_ERROR, error})
  }
}
