import React, {useState} from "react";

const ProductItem = ({ item, updateCart }) => {

    const [productCount, setProductCount] = useState(1);

    const decrement = () => {
        if(productCount >= 1)
            setProductCount(productCount - 1);
    }

    const increment = () => {
        setProductCount(productCount + 1);
    }

    return(
        <div className="product">
            <h3>{item.name}</h3>
            <p>{item.price}</p>
            <div>
                <span onClick={decrement}>-</span>
                <span>{productCount}</span>
                <span onClick={increment}>+</span>
            </div>
            <button onClick={() => updateCart(item, productCount)}>Add to Cart</button>
        </div>
    );
}

export default ProductItem;