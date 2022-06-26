import { combineReducers } from "redux";
import {addToCartReducer} from './cartReducer'

const rootReducer= combineReducers({
    addToCartReducer:addToCartReducer
}
)
export default rootReducer