import React, { useState, useEffect } from "react";

const CartItem = ({item, count, updateCart}) => {
    
    const [productCount, setProductCount] = useState(count);
  
    useEffect(() => {
        setProductCount(count);
      }, [count]);
    
    const decrement = () => {
  
        if(productCount >= 1) {
            const newCount = productCount - 1;
            setProductCount(newCount);
            updateCart(item, newCount); // newCount is accurate
        }
       
    };

    const increment = () => {
        
        const newCount = productCount + 1;
        setProductCount(newCount);
        updateCart(item, newCount); // newCount is accurate
    };

    return(
        <div className="cart-item">
            <span>
                <h3>{item.name}</h3>
                <p>{item.price}</p>
            </span>
            <span>
                <span onClick={decrement}>-</span>
                <span>{productCount}</span>
                <span onClick={increment}>+</span>
            </span>
        </div>
    );
}
export default CartItem;