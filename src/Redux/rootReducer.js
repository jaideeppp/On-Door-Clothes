import { combineReducers } from 'redux'

import userReducer from './User/userReducer'
import CartReducer from './Cart/CartReducer'

export default combineReducers({
    user: userReducer,
    cart: CartReducer
})