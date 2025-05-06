import React, {useState} from "react";
import ProductsContainer from "./ProductsContainer";
import ProgressBar from "./ProgressBar";
import CartItemsContainer from "./CartItemsContainer";

const container = () => {

    return(
        <div>
            <h1 className="main-heading">My Shopping Cart</h1>
            <ProductsContainer/>
            <ProgressBar/>
            <CartItemsContainer/>
        </div>
    );

}
export default container;