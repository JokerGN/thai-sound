import {fork} from 'redux-saga/effects'
import watchUser from './user/userWatcher'
import watchRegister from './register/registerWatcher'

export default function* saga() {
  yield fork(watchUser)
  yield fork(watchRegister)
}
