import * as types from './action.type'
export const plus = () => ({
    type: types.PLUS
})
export function minus() {
    return { type: types.MINUS }
}