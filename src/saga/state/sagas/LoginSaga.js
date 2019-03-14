import * as types from '../action.type'

import { put, call, take, cancelled, fork, cancel } from 'redux-saga/effects'
import api from '../../api'
// import api from '../../api'
// function* login(username, password) {
//     let taken = yield call([api, api.login], username, password)
//     yield put({ type: types.LOGIN_SUCCESS, taken })
//     api.storeItem('taken', taken)
//     return taken
// }

// export default function* loginSage() {
//     yield takeEvery(types.LOGIN_REQUEST, login)
// }


function* login(username, password) {//worker saga
    try {
        api.storeItem('loading', 'true');
        console.log(api.login)
        let token = yield call(api.login, username, password);

        // console.log(token)
        yield put({ type: types.LOGIN_SUCCESS, token });
        api.storeItem('token', token);
        api.storeItem('loading', 'false');
        return token;
    } catch (error) {
        api.storeItem('loading', 'false');
    } finally {//不管成功还是失败，不管这个任务是正常完成还是异常结束都会走到这里
        if (yield cancelled()) {
            console.log('cancelled');
            api.storeItem('loading', 'false');
        }
    }
}
export default function* loginSaga() {//watch saga
    while (true) {
        let { username, password } = yield take(types.LOGIN_REQUEST);
        let task = yield fork(login, username, password);
        const action = yield take([types.LOGOUT, types.LOGIN_ERROR]);
        if (action.type === types.LOGOUT) {
            console.log('取消任务');
            yield cancel(task);
        }
        api.removeItem('token');
        yield put({ type: types.LOGIN_SUCCESS, token: null });
    }
}
