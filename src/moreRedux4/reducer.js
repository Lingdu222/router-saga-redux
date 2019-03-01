import * as types from './actionType'
const initiState = {
    number: 8
}

export default function reducer(state = initiState, action) {
    switch (action.type) {
        case types.ADD:

            return { number: state.number + 1 }
        case types.REDUCE:

            return { number: state.number - 1 }
        default:
            return state
    }
}