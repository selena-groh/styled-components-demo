const { GRAYONE } = require("./theme-constants");
const { colors, spacing } = require("./all");

const grayOneColors = {
  primary: {
    "0": "#39313a",
    "1": "#221924"
  },
  secondary: {
    "0": "#610321",
    "1": "#330010"
  }
};

const theme = {
  meta: {
    name: "Gray with Secondary 1",
    themeId: GRAYONE
  },
  colors: {
    ...colors,
    ...grayOneColors
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
