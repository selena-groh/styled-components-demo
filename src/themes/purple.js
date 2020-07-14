const { PURPLE } = require("./theme-constants");
const { colors, spacing } = require("./all");

const purpleColors = {
  primary: {
    "0": "#7f187f",
    "1": "#520f54"
  },
  secondary: {
    "0": "#990e35",
    "1": "#5f0927"
  }
};

const theme = {
  meta: {
    name: "Purple Rounded",
    themeId: PURPLE
  },
  colors: {
    ...colors,
    ...purpleColors
  },
  spacing,
  borderRadius: {
    base: "3px",
    button: "3px",
    small: "2px",
    medium: "4px",
    large: "8px"
  }
};

module.exports = {
  theme
};
