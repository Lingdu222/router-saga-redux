import rootReducer from './reducers'
import { createStore } from 'redux'

const store = createStore(rootReducer)

console.log(store)
export default store