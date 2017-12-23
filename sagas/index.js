import {fork} from 'redux-saga/effects'
import watchUser from './user/userWatcher'

export default function* saga() {
  yield fork(watchUser)
}
