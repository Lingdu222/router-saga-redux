
import * as types from './actionType'

const initState = {
    count: 1
}
export default function reducer2(state = initState, action) {
    switch (action.type) {
        case types.ADD2:
            return { count: state.count + 1 }
        case types.JIAN:
            return { count: state.count - 1 }
        default:
            return state
    }
}