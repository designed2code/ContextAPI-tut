import React from "react";
import {CounterContext} from '../contexts/CounterContext'
import {useContext} from 'react'
const MyCounter = (props) => {
  const {count,increaseCount,decreaseCount} = useContext(CounterContext)
  return (
    <>
      <h2>Counter Component</h2>
      <p>Count is :{count}</p>
      <button onClick={increaseCount}>Increase</button>
      <button onClick={decreaseCount}>Decrease</button>
    </>
  );
};
export default MyCounter;
