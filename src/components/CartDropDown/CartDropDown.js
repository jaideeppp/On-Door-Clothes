import React from 'react';
import CustomButton from '../CustomButton/CustomButton'
import './CartDropDown.scss'
import { connect } from 'react-redux'
import CartItem from '../CartItem/CartItem';
import { selectCartItems } from '../../Redux/Cart/CartSelectors'
import { withRouter } from 'react-router-dom'
import { toggleCartHidden } from '../../Redux/Cart/CartAction'


const CartDropDown = ({ cartItems, history, dispatch }) => {
    return (
        <div className='cart-dropdown'>
            <div className="cart-items" >
                {
                    cartItems.length ?
                        cartItems.map(cartItem => (
                            <CartItem key={cartItem.id} item={cartItem} />
                        )) :
                        <span className="empty-message">Your cart is empty</span>
                }
            </div>
            <CustomButton
                onClick={() => {
                    history.push('/checkout');
                    dispatch(toggleCartHidden());
                }}>
                GO TO CHECKOUT
            </CustomButton>
        </div>
    )
}

const mapStateToProps = state => ({
    cartItems: selectCartItems(state)
})

export default withRouter(connect(mapStateToProps)(CartDropDown));  