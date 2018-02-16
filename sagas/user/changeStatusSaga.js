import { put, call } from 'redux-saga/effects'
import { changeStatusData } from '../../api/api'
import * as types from '../../constants/actionTypes'

export function* changeStatus({payload}) {
  try {
    const changestatus = yield call(changeStatusData, payload)
    yield put({type: types.CHANGE_STATUS_SUCCESS, changestatus})
  } catch (error) {
    yield put({type: types.CHANGE_STATUS_ERROR, error})
  }
}
