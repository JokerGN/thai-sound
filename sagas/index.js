import {fork} from 'redux-saga/effects'
import watchUser from './user/userWatcher'
import watchShowUser from './user/showUserWatcher'
import watchRegister from './register/registerWatcher'
import watchComponent from './component/componentWatcher'
import watchChangeStatus from './user/changeStatusWatcher'
import watchShowSound from './sound/showSoundWatcher'
import watchPage from './component/pageWatcher'

export default function* saga() {
  yield fork(watchUser)
  yield fork(watchRegister)
  yield fork(watchComponent)
  yield fork(watchShowUser)
  yield fork(watchChangeStatus)
  yield fork(watchShowSound)
  yield fork(watchPage)
}
