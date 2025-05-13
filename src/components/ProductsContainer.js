import React from "react";
import ProductItem from "./ProductItem";
import { PRODUCTS } from "../constants/products";

const ProductsContainer = ({updateCart}) => {
    return(
        <div className="products-container">
            <h2> List Of Products </h2>
            <div className="product-list">
                {PRODUCTS.map((item, index) => (
                     <ProductItem key={index} item={item} updateCart={updateCart}/>
                ))}
            </div>
        </div>
    );
}

export default ProductsContainer;