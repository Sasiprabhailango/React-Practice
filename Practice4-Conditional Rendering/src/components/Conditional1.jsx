// if-else

import React, { useState } from "react";

export const Conditional1 = () => {
  let styleButton = {
    width: "100px",
    height: "auto",
    borderRadius: "10px",
    border: "2px solid gray",
    boxShadow: "5px 5px 2px black",
    backgroundColor: "lightgrey",
    color: "black",
    padding: "10px",
    cursor: "pointer",
  };
  let message;

  let [count, setCount] = useState(0);

  function handleIncrease() {
    setCount((countValue) => countValue + 1);
  }

  if (count < 10) {
    message = (
      <div>
        <h3>you got {count} coins!🪙 </h3>
        <p>Click {10 - count} more time to gets a extra gift.</p>
      </div>
    );
  } else if (count === 10) {
    message = (
      <div>
        <h3>you got {count} coins🪙 </h3>
        <h3>Now you have 10 coins and you've also got some gifts! 🎁</h3>
      </div>
    );
  } else {
    message = (
      <div>
        <h3>you got {count} coins🪙 </h3>
        <h3>Click more to get more coins!🪙</h3>
      </div>
    );
  }
  return (
    <div>
      <h1>
        If you want extra coins, click here to get them. You get one
        coin each time you click.🪙
      </h1>
      <button style={styleButton} onClick={handleIncrease}>
        {" "}
        Click Me !!
      </button>
      {message}
    </div>
  );
};

export default Conditional1;
