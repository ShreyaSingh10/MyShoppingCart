import React, { useState } from "react";

const CartItem = ({item}) => {
  
    //const [count, setCount] = useState(0);
    
    const decrement = () => {

    }

    const increment = () => {

    }

    return(
        <div className="cart-item">
            <span>
                <h3>{item.name}</h3>
                <p>{item.price}</p>
            </span>
            <span>
                <span onClick={decrement}>-</span>
                <span>{item.productCount}</span>
                <span onClick={increment}>+</span>
            </span>
        </div>
    );
}
export default CartItem;