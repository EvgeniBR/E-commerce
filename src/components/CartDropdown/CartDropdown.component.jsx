import React from 'react'
import { connect } from 'react-redux';
import CartItem from '../CartItem/CartItem.component';
import CustomButton from '../CustomButton/CustomButton.component'

import './CartDropdown.styles.scss'

const CartDropdown = ({cartItems}) =>{

    return(
        <div className="cart-dropdown">
            <div className="cart-items">
                {
                   cartItems.map(carItem =>{
                        return <CartItem key={carItem.id} item={carItem} />    
                   }) 
                }
            </div>
            <CustomButton>GO TO CHECKOUT</CustomButton>
        </div>
    )
};

const mapStateToProps = ({ cart: { cartItems } }) =>({
    cartItems
})

export default connect(mapStateToProps)(CartDropdown)