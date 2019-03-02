import { createStore, applyMiddleware, compose } from 'redux'
// import createSagaMiddleware from "redux-saga"
import { reducer } from './reducer'
// import rootSaga from './saga'
// const sagaMiddleware = createSagaMiddleware()
const reduxDevtool = window.devToolsExtension // 结合浏览器插件redux Devtools


const store = createStore(reducer, compose(
    // applyMiddleware(sagaMiddleware),
    reduxDevtool ? reduxDevtool() : () => { }
))
// const store = createStore(reducer)
// sagaMiddleware.run(rootSaga)
export default store