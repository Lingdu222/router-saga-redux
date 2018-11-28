import { actionTypes } from '../action/actionTypes'

const initialState = {
    list: []
}

export const getTodoList = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.UPDATE_DATA:
            return {
                ...state,
                list: action.data
            }
        default:
            return state
    }
}