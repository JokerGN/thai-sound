import { takeLatest } from 'redux-saga/effects'
import { soundAnalysis } from './soundanalysisSaga'
import * as types from '../../constants/actionTypes'

export default function* watchSoundAnalysis() {
    yield takeLatest(types.GET_SOUND_ANALYSIS_REQUEST, soundAnalysis)
}
