import { call, put, takeEvery, all } from 'redux-saga/effects';

import * as types from '../state/action.type'

function delay(time) {
    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            resolve()
        }, time)
    })
}

export function* asyncadd() {
    yield delay(1000)
    yield put({ type: types.ADD })
}

export function* asyncreduce() {
    yield delay(1000)
    yield put({ type: types.REDUCE })
}

export function* watchAdd() {
    yield takeEvery(types.ADD_SAGA, asyncadd)
}
export function* watchReduce() {
    yield takeEvery(types.REDUCE_SAGA, asyncreduce)
}

export function* hello() {
    console.log('hello saga');

}

export default function* rootSagas() {
    yield all([
        hello(),
        watchAdd(),
        watchReduce()

    ])
}

