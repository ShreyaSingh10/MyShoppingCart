import React from "react";

const CartItem = () => {

    return(
        <div className="cart-item">
            <span>
                <h3>Product</h3>
                <p1>Price</p1>
            </span>
            <span>
                <span>-</span>
                <span>Value</span>
                <span>+</span>
            </span>
        </div>
    );
}
export default CartItem;