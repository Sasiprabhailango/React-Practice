import React, { useState } from "react";

export const Counter = () => {
  // normal declaration
  //   let count = 0;

  // use state for print on web page
  let [count, setCount] = useState(0);

  // also use function on usestate

  function returnState(sub){
    return "hello"+ " "+sub;
  }
  
  let name = "sai";
  let [sample,setSample] = useState(()=>{ return returnState(name)});

  function handleIncrease() {
    //use function for to print on webpage

    setCount((countValue) => countValue + 1);

    // for mutliple addition

    // setCount((countValue) => countValue + 1);
    // setCount((countValue) => countValue + 1);
    // setCount((countValue) => countValue + 1);
    // setCount((countValue) => countValue + 1);

    // count+=1;
    // console.log(count);
  }
  function handleDecrease() {
    //use function for to print on webpage

    setCount((countValue) => countValue - 1);

    // count-=1;
    // console.log(count);
  }

  let bstyle = {
        margin :"30px",
        boxShadow:"10px 10px 5px black",
  }
  return (
    <div>
      <h1 style={{fontSize:"medium"}}>Count now = {count}</h1>
      <button onClick={handleIncrease} style={bstyle}>Increase</button>
      <button onClick={handleDecrease} style={bstyle}>Decrease</button>
    <h2 style={{color:"powderblue"}}>{sample}  </h2>
    </div>
  );
};

export default Counter;
