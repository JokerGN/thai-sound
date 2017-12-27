import { createStore, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'
import { composeWithDevTools } from 'redux-devtools-extension'
import rootReducer from '../reducers'
import rootSaga from '../sagas'

const saga = createSagaMiddleware()

const InitializeStore = initialState => {
  const store = createStore(
    rootReducer,
    initialState,
    composeWithDevTools(
      applyMiddleware(saga)
    )
  )

  store.sagaTask = saga.run(rootSaga)

  return store
}

export default InitializeStore
