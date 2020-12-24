import CartActionTypes from './CardType'
import { addItemToCart } from './CartUtils'
const initialState = {
    hidden: true,
    cartItems: []
};


const CartReducer = (state = initialState, action) => {
    switch (action.type) {
        case CartActionTypes.TOGGLE_CART_HIDDEN:
            return {
                ...state, hidden: !state.hidden
            }
        case CartActionTypes.ADD_ITEM:
            return {
                ...state,
                cartItems: addItemToCart(state.cartItems, action.payload)
            }
        default:
            return state;
    }
}

export default CartReducer