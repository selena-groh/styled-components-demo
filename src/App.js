import React from "react";
import Demo from "./demo";
import styled from "styled-components";

const Header = styled.header`
  text-align: center;
`;

const StyledApp = styled.div`
  font-family: sans-serif;
  margin: 8px;
`;

const StyledIFrame = styled.iframe`
  width: 100%;
  height: 600px;
`;

const App = () => (
  <StyledApp>
    <Header>
      <h1>Styled Components</h1>
      <p>
        <em>Combining the flexibility of CSS with the power of ES6</em>
      </p>
      <p>Updated July 2020, Selena Groh</p>
    </Header>
    <Demo />
  </StyledApp>
);

export default App;
