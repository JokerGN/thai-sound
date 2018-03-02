import { put, call } from 'redux-saga/effects'
import { getTypeData } from '../../api/api'
import * as types from '../../constants/actionTypes'

export function* showTypeSaga() {
  try {
    const get_type = yield call(getTypeData)
    yield put({type: types.GET_TYPE_SUCCESS, get_type})
  } catch (error) {
    yield put({type: types.GET_TYPE_ERROR, error})
  }
}
