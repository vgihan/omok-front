import { Theme } from "@emotion/react";

declare module "@emotion/react" {
  export interface Theme {
    colors: {
      charcoal: string;
    };
    fonts: {
      righteous: string;
    };
    breakpoints: {
      lg: string;
      md: string;
      sm: string;
    };
  }
}

const theme: Theme = {
  colors: {
    charcoal: "#363636",
  },
  fonts: {
    righteous: "righteous",
  },
  breakpoints: {
    lg: "1200px",
    md: "768px",
    sm: "480px",
  },
};

export default theme;
