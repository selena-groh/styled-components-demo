const { BLUE } = require("./theme-constants");
const { colors, spacing } = require("./all");

const blueColors = {
  primary: {
    "0": "#002f52",
    "1": "#00192e"
  },
  secondary: {
    "0": "#970e00",
    "1": "#540800"
  }
};

const theme = {
  meta: {
    name: "Blue Rounded",
    themeId: BLUE
  },
  colors: {
    ...colors,
    ...blueColors
  },
  spacing,
  borderRadius: {
    base: null,
    button: null,
    small: "1px",
    medium: "2px",
    large: "4px"
  }
};

module.exports = {
  theme
};
