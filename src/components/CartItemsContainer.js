import React, {useEffect, useState} from 'react';
import CartItem from './CartItem';

const CartItemsContainer = ({list, updateCart}) => {
    const [cartValue, setCartValue] = useState(0);

   useEffect(() => {
        const totalValue = list.reduce((acc, item) => acc + Number(item.price), 0);
        setCartValue(totalValue);
      });

    return (
        <div className="cart-item-container">
          <h2>Cart Items</h2>
          {Array.isArray(list) && list.length > 0 ? (
            list.map((item, index) => (
              <CartItem key={index} item={item} count={item.productCount} updateCart={updateCart}/>
            ))
          ) : (
            <p>No items in the cart</p> // Show if the list is empty
          )}
          {cartValue >= 1000 && <p> Free Gift Unlocked</p>}
        </div>
      );
    }
export default CartItemsContainer;