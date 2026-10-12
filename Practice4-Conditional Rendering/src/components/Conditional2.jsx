// switch case 

import React, { useState } from "react";

export const Conditional2 = () => {
  const buttonContainer = {
    display: "flex",
    gap: "20px",
  };

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
    gap: "20px",
  };
  const [data, setData] = useState("Loading");

  let displayMessage = () => {
    switch (data) {
      case "Loading":
        return <Loading />;
        break;
      case "Success":
        return <Success />;
        break;
      case "Error":
        return <Error />;
        break;
    }
  };

  return (
    <div>
      <div style={buttonContainer}>
        <button style={styleButton} onClick={() => setData("Loading")}>
          Loading
        </button>
        <button style={styleButton} onClick={() => setData("Success")}>
          Success
        </button>
        <button style={styleButton} onClick={() => setData("Error")}>
          Error
        </button>
      </div>
      <div>{displayMessage()}</div>
    </div>
  );
};

export default Conditional2;

function Loading() {
  return <h4> Loading...</h4>;
}

function Success() {
  return <h4> Success.</h4>;
}

function Error() {
  return <h4> Error._.</h4>;
}
