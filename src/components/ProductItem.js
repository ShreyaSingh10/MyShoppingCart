import React, {useState} from "react";

const ProductItem = ({ item, updateCart }) => {
    //console.log("VALUES", key, item);

    const [productCount, setProductCount] = useState(1);

    const decrement = () => {
        if(productCount >= 1)
            setProductCount(productCount - 1);
        console.log("decre");
    }

    const increment = () => {
        setProductCount(productCount + 1);
        console.log("incre");
    }

    // const addToCart = () => {
    //     updateCart(productName, price, count );
    //     //adds product to cart callback
    // }

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