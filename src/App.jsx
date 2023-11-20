import { useState } from "react";
import "./App.css";
import styled from "styled-components";
import Header from "./components/Header.jsx";
import QuadraticFactorise from "./components/Quadratic.jsx";
import SingleBracketFactorise from "./components/SingleBracket.jsx";
import SolvingLinear from "./components/SolvingLinear.jsx";

const StyledBody = styled.div`
  color: #ac5293;
`;

const StyledContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
`;

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Header />
      <StyledBody>
        <StyledContainer>
          <QuadraticFactorise />
          <SingleBracketFactorise />
          <SolvingLinear />
        </StyledContainer>
      </StyledBody>
    </>
  );
}

export default App;
