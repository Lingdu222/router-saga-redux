import { delay } from 'redux-saga'
// import { put, takeEvery, all } from 'redux-saga/effects'

// 

// export function* incrementAsync() {
//     yield delay(1000)
//     yield put({ type: 'INCREMENT' })
// }

// // Saga 监听函数：每次监听到 ```INCREMENT_ASYNC``` action ，都会触发一个新的异步任务
// export function* watchIncrementAsync() {
//     yield takeEvery('INCREMENT_ASYNC', incrementAsync)
// }

// // 同时执行一个入口的多个 Sagas
// export default function* rootSaga() {
//     yield all([
//         // helloSaga(),
//         watchIncrementAsync()
//     ])
// }

import { put, call, take, fork } from 'redux-saga/effects';
import { takeEvery, takeLatest } from 'redux-saga'
import * as types from './actionType'

// export const delay = ms => new Promise(resolve => setTimeout(resolve, ms));


// Saga 作用函数：执行异步任务
function* incrementAsync() {
    // 延迟 1s 在执行 + 1操作
    // yield call(delay, 1000);
    yield delay(1000)
    yield put({ type: types.ADD });
}

export default function* rootSaga() {
    // while(true){
    //   yield take('INCREMENT_ASYNC');
    //   yield fork(incrementAsync);
    // }

    // 下面的写法与上面的写法上等效
    yield* takeEvery(types.ADD_ASYNC, incrementAsync)
}