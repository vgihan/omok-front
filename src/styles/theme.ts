import { Theme } from "@emotion/react";

declare module "@emotion/react" {
  export interface Theme {
    colors: {
      charcoal: string;
      lightCharcoal: string;
      gray: string;
      gold: string;
      lightGray: string;
      darkGray: string;
      cottonWhite: string;
      aqua: string;
      opacityCottonWhite: string;
    };
    fonts: {
      righteous: string;
      notosans: string;
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
    lightCharcoal: "#4C4C4C",
    gray: "#9D9D9D",
    gold: "#E4B04A",
    lightGray: "#C4C4C4",
    darkGray: "#1e1e1e",
    cottonWhite: "#FDFBFB",
    aqua: "rgba(95, 255, 251, 0.74)",
    opacityCottonWhite: "rgba(253, 251, 251, 0.24)",
  },
  fonts: {
    righteous: "righteous",
    notosans: "notosans",
  },
  breakpoints: {
    lg: "1200px",
    md: "768px",
    sm: "480px",
  },
};

export default theme;
