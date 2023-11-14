import { useState } from "react";
import "./App.css";
import styled from "styled-components";
import Header from "./components/Header.jsx";
import QuadraticFactorise from "./components/Quadratic.jsx";
import SingleBracketFactorise from "./components/SingleBracket.jsx";

const StyledBody = styled.div`
  color: #ac5293;
`;

const StyledContainer = styled.div`
  display: flex;
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
        </StyledContainer>
      </StyledBody>
    </>
  );
}

export default App;
