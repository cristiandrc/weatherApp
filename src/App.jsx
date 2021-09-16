import React from "react";
import { GlobalStyles } from "./style/GlobalStyles";
import Home from "./containers/Home";
import { ContextProvider } from "./context/Context";

const App = () => {
  return (
    <ContextProvider>
      <GlobalStyles />
      <Home />
    </ContextProvider>
  );
};

export default App;
