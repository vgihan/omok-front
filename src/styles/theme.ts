import { Theme } from "@emotion/react";

declare module "@emotion/react" {
  export interface Theme {
    colors: {
      charcoal: string;
      gray: string;
      gold: string;
      lightGray: string;
      cottonWhite: string;
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
    gray: "#9D9D9D",
    gold: "#E4B04A",
    lightGray: "#C4C4C4",
    cottonWhite: "#FDFBFB",
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
