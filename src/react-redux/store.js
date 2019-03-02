import { reducer } from './reducer'
import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import createSagaMiddleware from "redux-saga"

// import { helloSaga } from '../saga/index'


const sagaMiddleware = createSagaMiddleware()
const reduxDevtool = window.devToolsExtension // 结合浏览器插件redux Devtools


const store = createStore(reducer, compose(
    applyMiddleware(thunk, sagaMiddleware),
    reduxDevtool ? reduxDevtool() : () => { }
))
// sagaMiddleware.run(helloSaga)  // 运行 Sagas 函数
export default store