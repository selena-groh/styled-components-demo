import React, { useEffect, useState } from "react";
import styled, { ThemeProvider } from "styled-components";
import green from "./themes/green";
import blue from "./themes/blue";
import grayone from "./themes/grayone";
import graytwo from "./themes/graytwo";
import purple from "./themes/purple";
import Button, { PrimaryButton } from "./button";
import ThemeSwitcher from "./theme_switcher";

const THEMES = [
  green.theme,
  blue.theme,
  grayone.theme,
  graytwo.theme,
  purple.theme
];

const StyledDemo = styled.div`
  padding-bottom: ${props => props.theme.spacing[10]};
`;

// These could be separated into separate components, but are left here for illustration
const ThemeName = styled.span`
  font-weight: bold;
  color: ${props => props.theme.colors.primary[0]};
`;
const ButtonSection = styled.div`
  padding: ${props => props.theme.spacing[2]} 0
    ${props => props.theme.spacing[10]};
`;
const Code = styled.code`
  font-family: "Lucida Console", Monaco, monospace;
`;

const Demo = () => {
  const [activeTheme, setActiveTheme] = useState(THEMES[0]);

  // Grab and display the button's class names every time the theme changes
  const [generatedClassNames, setGeneratedClassNames] = useState(
    "Click me to see my classnames"
  );
  const [
    generatedSecondaryClassNames,
    setGeneratedSecondaryClassNames
  ] = useState("Click me to see my classnames");
  useEffect(() => {
    setGeneratedClassNames(
      `My classnames: "${
        document.getElementById("generatedClassNameExampleButton")?.className
      }"`
    );
    setGeneratedSecondaryClassNames(
      `My classnames: "${
        document.getElementById("generatedClassNameExampleButtonSecondary")
          ?.className
      }"`
    );
  }, [activeTheme]);

  return (
    <ThemeProvider theme={activeTheme}>
      <StyledDemo>
        <h2>Demo</h2>
        <button>Unstyled Button (not a styled-component)</button>
        <p>
          These buttons are styled according to the current theme using the
          styled-components library.
        </p>
        <ButtonSection>
          <Button>Normal Button</Button>
          <Button variant="primary">Primary Button</Button>
          <PrimaryButton>Primary Button Using attrs</PrimaryButton>
          <Button variant="secondary">Secondary Button</Button>
          <p>
            Class Names are generated according to unique styling. The themes
            "Gray with Secondary 1" and "Gray with Secondary 2" both have the
            same styling for the first button, so it gets the same class names.
            Their styling differs for the second button, so it gets different
            class names depending on theme.
          </p>
          <Button id="generatedClassNameExampleButton">
            {generatedClassNames}
          </Button>
          <Button
            id="generatedClassNameExampleButtonSecondary"
            variant="secondary"
          >
            {generatedSecondaryClassNames}
          </Button>
        </ButtonSection>
        <p>
          Current Theme: <ThemeName>{activeTheme.meta.name}</ThemeName>
        </p>
        <span>Switch Theme: </span>
        {THEMES.map(theme => (
          <ThemeSwitcher
            key={theme.meta.themeId}
            theme={theme}
            switchTheme={setActiveTheme}
          >
            {theme.meta.name}
          </ThemeSwitcher>
        ))}
        <p>
          <small>
            * These &ldquo;Switch Theme&rdquo; buttons above are actually also
            styled by styled-components, just using a <Code>ThemeProvider</Code>{" "}
            for the given theme!
          </small>
        </p>
      </StyledDemo>
    </ThemeProvider>
  );
};

export default Demo;
