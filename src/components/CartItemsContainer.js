import React from 'react';
import CartItem from './CartItem';

const CartItemsContainer = () => {
    return(
        <div className='cart-item-container'>
            <h2>Cart Items</h2>
            <CartItem></CartItem>
            <CartItem></CartItem>
        </div>
    );
}

export default CartItemsContainer;