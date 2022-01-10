import { Global } from "@emotion/react";
import React from "react";
import Router from "./Router";
import reset from "./reset";

const App: React.FC = () => {
  return (
    <div>
      <Global styles={reset} />
      <Router />
    </div>
  );
};

export default App;
