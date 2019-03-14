import * as types from './action.type'
const initalState = {
    number: 0,
    // username:'',
    // password:'',
    taken: '',
}
export const Reducer = (state = initalState, action) => {
    switch (action.type) {
        case types.ADD:
            return { number: state.number + 1 }
        case types.REDUCE:
            return { number: state.number - 1 }
        case types.LOGIN_SUCCESS:
            return { ...state, taken: action.taken }
        default:
            return state
    }
}