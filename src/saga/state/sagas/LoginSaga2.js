import * as types from '../action.type'
import { put, call, take, fork } from 'redux-saga/effects'
import api from '../../api'


function* login(username, password) {//worker saga
    let token = yield call(api.login, username, password);
    yield put({ type: types.LOGIN_SUCCESS, token });
    api.storeItem('token', token);
    return token;

}
export default function* loginSaga() {//watch saga
    let { username, password } = yield take(types.LOGIN_REQUEST);
    //无阻塞调用
    yield fork(login, username, password);

    const action = yield take([types.LOGOUT, types.LOGIN_ERROR]);
    if (action.type === types.LOGOUT) {
        console.log('取消任务');
    }
    api.removeItem('token');
    yield put({ type: types.LOGIN_SUCCESS, token: null });
}
