import { combineReducers } from 'redux'
import { persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import userReducer from './User/userReducer'
import CartReducer from './Cart/CartReducer'
import directoryReducer from './Directory/directoryReducer'
import shopReducer from './Shop/shopReducer'

const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['cart']
}

const rootReducer = combineReducers({
    user: userReducer,
    cart: CartReducer,
    directory: directoryReducer,
    shop: shopReducer,
})

export default persistReducer(persistConfig, rootReducer);