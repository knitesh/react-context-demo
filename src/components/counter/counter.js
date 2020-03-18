import React from "react";
import Button from "@material-ui/core/Button";

import Context from "./context";

export default function Counter() {
  const { count, setCount } = React.useContext(Context);
  return (
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
  );
}
