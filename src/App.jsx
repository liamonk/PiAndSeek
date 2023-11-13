import { useState } from "react";
import "./App.css";
import styled from "styled-components";
import QuadraticFactorise from "./components/Quadratic.jsx";
import SingleBracketFactorise from "./components/SingleBracket.jsx";

const StyledHeader = styled.div`
  color: #155263;
`;

function App() {
  const [count, setCount] = useState(0);

  return (
    <StyledHeader>
      <h1>Pi & Seek</h1>
      <QuadraticFactorise />
      <SingleBracketFactorise />
    </StyledHeader>
  );
}

export default App;
