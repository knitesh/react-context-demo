import React from "react";

const CounterContext = React.createContext();

const CounterProvider = ({ children }) => {
  const [count, setCount] = React.useState(0);
  return (
    <CounterContext.Provider value={{ count, setCount }}>
      {children}
    </CounterContext.Provider>
  );
};

export { CounterProvider };
export default CounterContext;
