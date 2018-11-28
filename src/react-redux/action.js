/**
 * actionCrater  其实可以不写，只不过这样写更好：统一管理，万一以后有什么改动，改动成本比较小
 */
import * as types from "./actionType"


export function ADD() {
    return { type: types.ADD }
}
export function REDUCE() {
    return { type: types.REDUCE }
}


//模拟异步请求，thunk允许action返回一个函数, thunks 是在action被创建时调用
export function REDUCE2() {
    return dispatch => {
        setTimeout(() => {
            dispatch({ type: types.REDUCE2 })
        }, 2000)
    }
}