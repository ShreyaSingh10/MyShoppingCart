import React, {useState} from "react";

const ProductItem = () => {

    const [productCount, setProductCount] = useState(1);

    const decrement = () => {
        if(productCount >= 1)
            setProductCount(productCount - 1);
    }

    const increment = () => {
        setProductCount(productCount + 1);
    }

    const addToCart = () => {
        //adds product to cart callback
    }

    return(
        <div className="product">
            <h3> Product Name </h3>
            <p> Product Price</p>
            <div>
                <span onClick={decrement}>-</span>
                <span>{productCount}</span>
                <span onClick={increment}>+</span>
            </div>
            <div onClick={addToCart}> Add To Cart</div>
        </div>
    );
}

export default ProductItem;