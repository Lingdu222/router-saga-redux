/**
 * actionCrater  其实可以不写，只不过这样写更好：统一管理，万一以后有什么改动，改动成本比较小
 */
import * as types from "./actionType"
import { bindActionCreators } from 'redux';

// import { delay } from "redux-saga"
// import { put, takeEvery } from "redux-saga/effects"
// //takeEvery 所提供的功能就和 redux-thunk 非常相似 。
// // Saga 作用函数：执行异步任务
// export function* incrementAsync() {
//     yield delay(1000)
//     yield put({ type: 'INCREMENT' })
// }
// // Saga 监听函数：每次监听到 ```INCREMENT_ASYNC``` action ，都会触发一个新的异步任务
// export function* watchIncrementAsync() {
//     yield takeEvery('INCREMENT_ASYNC', incrementAsync)
// }

// export const add = (dispatch) => ({
//     type: types.ADD
// })
export const add = () => ({
    type: types.ADD
})
export const reduce = () => ({
    type: types.REDUCE
})


