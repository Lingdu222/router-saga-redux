import * as types from './action.type'

export function add() {
    return { type: types.ADD }
}
export function asyncadd() {
    return { type: types.ADD_SAGA }
}
export function reduce() {
    return { type: types.REDUCE }
}

export function asyncreduce() {
    return { type: types.REDUCE_SAGA }
}

export function login(name, pwd) {
    return { type: types.LOGIN_REQUEST, name, pwd }
}

export function logout() {
    return { type: types.LOGOUT };
}