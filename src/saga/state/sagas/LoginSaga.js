import * as types from '../action.type'
import { put, call, take, cancelled, fork } from 'redux-saga/effects'
import api from '../../api'


function* login(username, password) {//worker saga
    try {
        let token = yield call(api.login, username, password);
        yield put({ type: types.LOGIN_SUCCESS, token });
        api.storeItem('token', token);
        return token;
    } catch (error) {
        api.storeItem('loading', 'false');
    } finally {//不管成功还是失败，不管这个任务是正常完成还是异常结束都会走到这里
        if (yield cancelled()) {
            console.log('cancelled');
        }
    }
}
export default function* loginSaga() {//watch saga
    while (true) {
        let { username, password } = yield take(types.LOGIN_REQUEST);
        yield fork(login, username, password);
        const action = yield take([types.LOGOUT, types.LOGIN_ERROR]);
        if (action.type === types.LOGOUT) {
            console.log('取消任务');
        }
        api.removeItem('token');
        yield put({ type: types.LOGIN_SUCCESS, token: null });
    }
}
