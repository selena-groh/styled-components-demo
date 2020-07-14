import React from "react";
import { ThemeProvider } from "styled-components";
import Button from "./button";

const ThemeSwitcher = ({ theme, switchTheme, children }) => (
  <ThemeProvider theme={theme}>
    <Button variant="primary" onClick={() => switchTheme(theme)}>
      {children}
    </Button>
  </ThemeProvider>
);

export default ThemeSwitcher;
