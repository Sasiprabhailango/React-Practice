// send a data to child using object like key :pair

// is this parent 

import React, {useState}from 'react'
import ProductItem from './ProductItem';

export const Shop = () => {

    let [product, setProduct] = useState({

            productName :"iphone",
            productPrice : 100000,
            productDescription:"8GB RAM with 126GB"
            
        });


  return (
    <div>
        <h1>Welcome to the shop</h1>
        <ProductItem TotalProduct = {product}/>

    </div>
  );
}

export default Shop