import {
    takeLatest, // 短时间内（没有执行完函数）多次触发的情况下，指会触发相应的函数一次
    takeEvery, // takeLatest 的同胞兄弟，不同点是每次都会触发相应的函数
    put, // 作用跟 dispatch 一毛一样，可以就理解为dispatch
    call // fork 的同胞兄弟，不过fork是非阻塞，call是阻塞，阻塞的意思就是到这块就停下来了
} from 'redux-saga/effects';

import { all } from "redux-saga/effects"


import { watchIncrementAsync } from './actionCreator'

export default function* rootSaga() {
    yield all([
        watchIncrementAsync()
    ])
}