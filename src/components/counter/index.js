import React from "react";
import Button from "@material-ui/core/Button";

import CounterContext, { CounterProvider } from "./context";

const Counter = () => {
  return (
    <CounterProvider>
      <CounterContext.Consumer>
        {({ count, setCount }) => (
          <>
            <h2>Count : {count}</h2>
            <Button
              variant="contained"
              color="primary"
              onClick={() => setCount(count + 1)}
            >
              {"Increment Counter"}
            </Button>
            <Button
              varinat="outlined"
              color="primary"
              onClick={() => setCount(count - 1)}
            >
              {"Decrement Counter"}
            </Button>
          </>
        )}
      </CounterContext.Consumer>
    </CounterProvider>
  );
};

export default Counter;
