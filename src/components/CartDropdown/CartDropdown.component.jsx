import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router";
import { toggleCartHidden } from "../../redux/cart/cart.actions";
import { selectCartItems } from "../../redux/cart/cart.selectors";
import CartItem from "../CartItem/CartItem.component";
import CustomButton from "../CustomButton/CustomButton.component";

import "./CartDropdown.styles.scss";

const CartDropdown = ({ cartItems, history, dispatch }) => {
  return (
    <div className="cart-dropdown">
      <div className="cart-items">
        {cartItems.length ? (
          cartItems.map((carItem) => {
            return <CartItem key={carItem.id} item={carItem} />;
          })
        ) : (
          <span className="empty-message">Your cart is empty</span>
        )}
      </div>
      <CustomButton onClick={() =>{
          history.push('/checkout');
          dispatch(toggleCartHidden())
          }}>
        GO TO CHECKOUT
      </CustomButton>
    </div>
  );
};

const mapStateToProps = (state) => ({
  cartItems: selectCartItems(state),
});

export default withRouter(connect(mapStateToProps)(CartDropdown));
