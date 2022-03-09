import { Global, ThemeProvider } from "@emotion/react";
import { QueryClient, QueryClientProvider } from "react-query";
import React from "react";
import Router from "./Router";
import reset from "~styles/reset";
import theme from "~styles/theme";
import "~styles/font.css";

const queryClient = new QueryClient();

const App: React.FC = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={theme}>
        <Global styles={reset} />
        <Router />
      </ThemeProvider>
    </QueryClientProvider>
  );
};

export default App;
