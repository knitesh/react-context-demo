import React from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";

import "./App.css";

import CounterApp from "./components/counter";

function App() {
  return (
    <>
      <CssBaseline />
      <Container fixed>
        <Typography variant="h2">Counter App -Using React context</Typography>
        <div>
          <CounterApp />
        </div>
      </Container>
    </>
  );
}

export default App;
