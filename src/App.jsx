import { useState } from "react";
import "./App.css";
import styled from "styled-components";
import QuadraticFactorise from "./components/Quadratic.jsx";
import SingleBracketFactorise from "./components/SingleBracket.jsx";

const StyledHeader = styled.div`
  color: #155263;
`;

const StyledContainer = styled.div`
  display: flex;
`;

function App() {
  const [count, setCount] = useState(0);

  return (
    <StyledHeader>
      <h1>Pi & Seek</h1>
      <StyledContainer>
        <QuadraticFactorise />
        <SingleBracketFactorise />
      </StyledContainer>
    </StyledHeader>
  );
}

export default App;
