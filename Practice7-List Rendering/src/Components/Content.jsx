// here install icons also => npm install react-icons

import React, { useState } from "react";

import { FaCartShopping } from "react-icons/fa6";
import { MdLaptopChromebook } from "react-icons/md";
import { FaMobileAlt } from "react-icons/fa";
import { FaTabletScreenButton } from "react-icons/fa6";
import { MdOutlineHeadphones } from "react-icons/md";

export const Content = () => {
  let [product, setProduct] = useState([
    { id: 1, name: "Laptop", price: 45000, category: "Electronics" ,pIcons:<MdLaptopChromebook />},
    { id: 2, name: "Mobile", price: 20000, category: "Electronics" ,pIcons:<FaMobileAlt />},
    { id: 3, name: "Tablet", price: 15000, category: "Electronics" ,pIcons:<FaTabletScreenButton />},
    { id: 4, name: "Headphones", price: 2000, category: "Accessories",pIcons:<MdOutlineHeadphones /> }
  ]);
  return (
    <div className="content">
      {product.map((item) => {
        return(
        <div className="product-item" key={item.id}>
           <div className="product-icon">{item.pIcons}</div>
          <h3>{item.name}</h3>
          <p>{item.price}</p>
          <p>{item.category}</p>
          <button className="cart-btn">
             <FaCartShopping />Add to Cart
          </button>
          
        </div>
        );
      }
      )}
    </div>
  );
};
