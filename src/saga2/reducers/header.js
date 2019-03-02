import { actionTypes } from '../action/actionTypes'

const initialState = {
    count: 0
}

export const getTodoCount = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.TODO_COUNT:
            return state
        default:
            return state
    }
}