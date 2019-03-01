import { combineReducers } from "redux";
import reducer from './reducer'
import reducer2 from './reducer2'
const rootReducer = combineReducers({
    reducer,
    reducer2

})
export default rootReducer