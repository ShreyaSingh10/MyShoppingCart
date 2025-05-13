import React, {useState} from "react";
import ProductsContainer from "./ProductsContainer";
import ProgressBar from "./ProgressBar";
import CartItemsContainer from "./CartItemsContainer";

const Container = () => {
    const [list, setList] = useState([]);

    const updateCart = (item, productCount) => {
        setList(prevList => [...prevList, { id: item.id, name: item.name, price: item.price * productCount, productCount }]);
    }  

    return(
        <div>
            <h1 className="main-heading">My Shopping Cart</h1>
            <ProductsContainer updateCart={updateCart}/>
            <ProgressBar/>
            <CartItemsContainer list={list}/>
        </div>
    );

}
export default Container;