import * as types from './action.type'
const initalState = {
    number: 0
}
export const Reducer = (state = initalState, action) => {
    switch (action.type) {
        case types.ADD:
            return { number: state.number + 1 }
        case types.REDUCE:
            return { number: state.number - 1 }
        default:
            return state
    }
}