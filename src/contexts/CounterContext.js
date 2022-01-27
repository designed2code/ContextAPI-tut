// Step 1
import { useState, createContext } from "react";

// Step 2
export const CounterContext = createContext();

// Step 3
const CounterContextProvider = (props) => {
  // Step 4
  const [count, setCount] = useState(0);
  const increaseCount = () => {
    setCount(count + 1);
  };
  const decreaseCount = () => {
    setCount(count - 1);
  };
  // Step 5
  const value = { count, increaseCount, decreaseCount };
  return (
    // Step 6
    <CounterContext.Provider value={value}>
      {props.children}
    </CounterContext.Provider>
  );
};

export default CounterContextProvider;
