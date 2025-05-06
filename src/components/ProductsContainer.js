import React from "react";
import ProductItem from "./ProductItem";

const ProductsContainer = () => {

    return(
        <div className="products-container">
            <h2> List Of Products </h2>
            <div className="product-list">
                <ProductItem></ProductItem>
                <ProductItem></ProductItem>
                <ProductItem></ProductItem>
                <ProductItem></ProductItem>
            </div>
        </div>
    );
}

export default ProductsContainer;