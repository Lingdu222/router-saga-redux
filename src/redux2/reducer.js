/**
 * reducer 根据旧的state和action,生成新的state
 */
import * as types from './actionType'
export const reducer = (state = 0, action) => {
    switch (action.type) {
        case types.ADD:
            return state + 1
        case types.REDUCE:
            return state - 1
        default:
            return state
    }
}