const { GRAYTWO } = require("./theme-constants");
const { colors, spacing } = require("./all");

const grayTwoColors = {
  primary: {
    "0": "#39313a",
    "1": "#221924"
  },
  secondary: {
    "0": "#39313a",
    "1": "#221924"
  }
};

const theme = {
  meta: {
    name: "Gray with Secondary 2",
    themeId: GRAYTWO
  },
  colors: {
    ...colors,
    ...grayTwoColors
  },
  spacing,
  borderRadius: {
    base: null,
    button: null,
    small: null,
    medium: null,
    large: null
  }
};

module.exports = {
  theme
};
