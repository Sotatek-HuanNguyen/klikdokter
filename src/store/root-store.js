import { configureStore } from '@reduxjs/toolkit'
import { syncHistoryWithStore } from 'react-router-redux'
import { createBrowserHistory } from 'history'
import createSagaMiddleware from 'redux-saga'
import rootSaga from './root-saga'
import reducer from './root-reducer'
const sagaMiddleware = createSagaMiddleware()

const store = configureStore({
  reducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      immutableCheck: false,
      serializableCheck: false,
    })
      .concat(sagaMiddleware),
})

sagaMiddleware.run(rootSaga)

export const history = syncHistoryWithStore(createBrowserHistory(), store)
export default store