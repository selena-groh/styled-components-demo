const { GREEN } = require("./theme-constants");
const { colors, spacing } = require("./all");

const greenColors = {
  primary: {
    "0": "#235e4b",
    "1": "#003322"
  },
  secondary: {
    "0": "#9e2d06",
    "1": "#591600"
  }
};

const theme = {
  meta: {
    name: "Green Square",
    themeId: GREEN
  },
  colors: {
    ...colors,
    ...greenColors
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
