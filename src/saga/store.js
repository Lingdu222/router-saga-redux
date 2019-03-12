import { Reducer } from './state/reducer'
import { createStore, applyMiddleware } from 'redux'
import sagaMiddlewareFactory from 'redux-saga';
import rootSagas from './state/saga'
const sagaMiddleware = sagaMiddlewareFactory()
const store = createStore(Reducer, applyMiddleware(
    sagaMiddleware
))
sagaMiddleware.run(rootSagas)
export default store