import React from "react";
import ProductsContainer from "./ProductsContainer";
import ProgressBar from "./ProgressBar";
import CartItemsContainer from "./CartItemsContainer";

const container = () => {


    return(
        <div>
            <h1>My Shopping Cart</h1>
            <ProductsContainer/>
            <ProgressBar/>
            <CartItemsContainer/>
        </div>
    );

}
export default container;