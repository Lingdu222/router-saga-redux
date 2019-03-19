import { put, call, fork, take } from 'redux-saga/effects'
import * as types from '../action.type'
import api from '../../api'


function* login(username, password) { // work-saga
    let token = yield call(api.login, username, password)
    yield put({ type: types.LOGIN_SUCCESS, token })
    api.storeItem('token', token)
    return token



}
export default function* loginSaga() {
    let { username, password } = yield take(types.LOGIN_REQUEST)
    yield fork(login, username, password)

}
