import * as types from './action.type'
const inniState = {
    number: 0
}
export const reducer = (state = inniState, action) => {
    switch (action.type) {
        case types.PLUS:
            return { number: state.number + 1 }
        case types.MINUS:
            return { number: state.number - 1 }
        default:
            return state
    }
}