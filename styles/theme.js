const fontFamily = "Vollkorn";

const colors = {
  oceanBlue: "#1F7A8C",
  limeGreen: "#D2E3C8",
  sunsetRed: "#E65F5C",
  gray: "#808080",
  lightGray: "#B6B6B6",
  veryLightGray: "#EDEDED",
  white: "#FFFFFF",
  black: "#000000",
};

const dimensions = {
  base05: "4px",
  base: "8px",
  base2: "16px",
  base3: "24px",
  base4: "32px",
  base5: "40px",
  base6: "48px",
  base7: "56px",
  base8: "64px",
  base9: "72px",
  base10: "80px",
  base13: "104px",
  base17: "136px",
  base20: "160px",
};

const fontTypes = {
  h1: {
    fontFamily: `${fontFamily}`,
    fontWeight: "bold",
    fontSize: `${dimensions.base8}`,
    lineHeight: `${dimensions.base8}`,
  },
  h2: {
    fontFamily: `${fontFamily}`,
    fontSize: `${dimensions.base5}`,
    lineHeight: `${dimensions.base4}`,
  },
  medium: {
    fontSize: `${dimensions.base3}`,
    lineHeight: `${dimensions.base3}`,
  },
};

const breakpoints = {
  small: "768px",
  medium: "992px",
  large: "1200px",
  fourK: "2560px",
};

const theme = {
  fontFamily,
  colors,
  dimensions,
  fontTypes,
  breakpoints,
};

export default theme;
