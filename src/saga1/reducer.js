import * as types from './actionType'
export default function reducer(state = 9, action) {
    switch (action.type) {
        case types.ADD:
            return state + 1
        case types.REDUCE:
            return state - 1
        default:
            return state
    }
}