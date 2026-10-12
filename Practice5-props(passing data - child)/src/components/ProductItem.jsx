// receiving data from parent using props
// is this child

import React from "react";
import "../App.css";

// grandChild
import ProductDetails from "./ProductDetails";

export const ProductItem = ({ TotalProduct }) => {
  // console.log(props);

  // let {TotalProduct} = props;
  console.log(TotalProduct);

  return (
    <div>
      <h3>Displaying Product Items</h3>
      {/* direct use from parent 🔻*/}
      {/* <section>
        <h3>{TotalProduct.productName}</h3>
        <p>{TotalProduct.productPrice}</p>
        <p>{TotalProduct.productDescription}</p>
      </section> */}
      <ProductDetails
        // here command these to check the default values
        deepName={TotalProduct.productName}
        deepPrice={TotalProduct.productPrice}
        deepDescription={TotalProduct.productDescription}
      />
    </div>
  );
};

export default ProductItem;
