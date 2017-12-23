import { createStore, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'
import rootReducer from '../reducers'
import rootSaga from '../sagas'

const saga = createSagaMiddleware()

const InitializeStore = initialState => {
  const store = createStore(
    rootReducer,
    initialState,
    applyMiddleware(saga)
  )

  saga.run(rootSaga)

  return store
}

export default InitializeStore
