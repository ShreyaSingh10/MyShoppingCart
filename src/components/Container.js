import React, {useState, useEffect} from "react";
import ProductsContainer from "./ProductsContainer";
import ProgressBar from "./ProgressBar";
import CartItemsContainer from "./CartItemsContainer";
import CartItem from "./CartItem";

const Container = () => {
    const [list, setList] = useState([]);

    const updateCart = (item, productCount) => {
        setList(prevList => {
          if (productCount === 0) {
            // Remove item if count is 0
            return prevList.filter(cartItem => cartItem.id !== item.id);
          }
      
          const existingItem = prevList.find(cartItem => cartItem.id === item.id);
      
          if (existingItem) {
            // Update the count and price
            return prevList.map(cartItem =>
              cartItem.id === item.id
                ? { ...cartItem, productCount, price: item.price * productCount }
                : cartItem
            );
          } else {
            // Add new item
            return [...prevList, { ...item, productCount, price: item.price * productCount }];
          }
        });
      };    

    return(
        <div>
            <h1 className="main-heading">My Shopping Cart</h1>
            <ProductsContainer updateCart={updateCart}/>
            <ProgressBar/>
            <CartItemsContainer list={list} updateCart={updateCart}/>
        </div>
    );
}
export default Container;