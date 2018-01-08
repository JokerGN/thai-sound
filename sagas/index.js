import {fork} from 'redux-saga/effects'
import watchUser from './user/userWatcher'
import watchShowUser from './user/showUserWatcher'
import watchRegister from './register/registerWatcher'
import watchComponent from './component/componentWatcher'

export default function* saga() {
  yield fork(watchUser)
  yield fork(watchRegister)
  yield fork(watchComponent)
  yield fork(watchShowUser)
}
