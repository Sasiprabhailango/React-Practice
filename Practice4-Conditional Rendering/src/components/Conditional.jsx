// ternary and logical 

import React, { useState } from "react";

export const Conditional = () => {
  let styleButton = {
    width: "100px",
    height: "auto",
    borderRadius:"10px",
    border:"2px solid gray",
    boxShadow:"5px 5px 2px black",
    backgroundColor:"lightgrey",
    color:"black",
    padding:"10px",
    cursor:"pointer"

  };
  let [count, setCount] = useState(0);

  function handleIncrease() {
    setCount((countValue) => countValue + 1);
   
  }
   let remaining = 10-count;
  return (
    <div>
      <h1>Let's Start  counting to win discounts 🎉 {count}</h1>
      <button style={styleButton} onClick={handleIncrease}>
        Click me !!
      </button>
      
       {/* ternary operator */}

      {count >= 10 ? (
        <p>You unlocked a 10% discount! 🎊</p>
        // <p>If you get more gifts click 20 times</p>
      ) : (
        <p>Click {remaining} more times to get discount.</p>
      )}

       {/* logical operator */}

      {count>=20 && (<p>you got an extra bonus! 🎁</p>)}
    </div>
  );
};

export default Conditional;
