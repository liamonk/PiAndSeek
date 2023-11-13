import { useState } from "react";
import "./App.css";
import Quadratic from "./components/Quadratic.jsx";
import styled from "styled-components";

const StyledHeader = styled.div`
  color: #155263;
`;

function App() {
  const [count, setCount] = useState(0);

  return (
    <StyledHeader>
      <h1>Pi & Seek</h1>
      <Quadratic />
    </StyledHeader>
  );
}

export default App;
