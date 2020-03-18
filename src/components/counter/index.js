import React from "react";

import { CounterProvider } from "./context";
import Counter from "./counter";

const CounterWrapper = () => {
  return (
    <CounterProvider>
      <Counter />
    </CounterProvider>
  );
};

export default CounterWrapper;
