// props drilling parent -> child -> grandChild
// is this grandChild (mostly not use)

// also check the props type using install of prop-types
import React from "react";
import PropTypes from "prop-types";
export const ProductDetails = ({
  deepName = "VIVO", // it is new method
  deepPrice = 50000, // in react 19 to set a
  deepDescription = "8GB RAM with 126GB", //  default values
}) => {
  return (
    <div>
      <section>
        <h3>{deepName}</h3>
        <p>{deepPrice}</p>
        <p>{deepDescription}</p>
      </section>
    </div>
  );
};

export default ProductDetails;

// default value
// its is older method
// ProductDetails.defaultProps = {
//   deepName: "VIVO",
//   deepPrice: 50000,
//   deepDescription: "8GB RAM with 126GB",
// };

ProductDetails.propTypes = {
  deepName: PropTypes.string,
  deepPrice: PropTypes.number,
  deepDescription: PropTypes.string,
};
