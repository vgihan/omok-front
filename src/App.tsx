import { Global, ThemeProvider } from "@emotion/react";
import React from "react";
import Router from "./Router";
import reset from "./styles/reset";
import theme from "./styles/theme";
import "./styles/font.css";

const App: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <Global styles={reset} />
      <Router />
    </ThemeProvider>
  );
};

export default App;
