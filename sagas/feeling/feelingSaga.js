import { put, call } from 'redux-saga/effects'
import { getFeelingData } from '../../api/api'
import * as types from '../../constants/actionTypes'

export function* getFeeling({payload}) {
  try {
    const feeling = yield call(getFeelingData, payload)
    yield put({type: types.GET_FEELING_SUCCESS, feeling})
  } catch (error) {
    yield put({type: types.GET_FEELING_ERROR, error})
  }
}
