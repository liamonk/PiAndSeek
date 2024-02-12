import React from "react";
import "./App.css";
import styled from "styled-components";
import Header from "./components/Header.jsx";
import FactoriseQuadratic from "./components/question_cards/FactorisingQuadratic.jsx";
import SingleBracketFactorise from "./components/question_cards/SingleBracket.jsx";
import SolvingLinear from "./components/question_cards/SolvingLinear.jsx";
import SolveXBothSides from "./components/question_cards/SolveXBothSides.jsx";
import SimplifyLikeTerms from "./components/question_cards/SimplifyLikeTerms.jsx";
// import QuestionCard from "./components/QuestionCard.jsx";

const StyledBody = styled.div`
  color: #ac5293;
`;

const StyledContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
`;

function App() {
  const [count, setCount] = React.useState(0);
  const onUpdateCount = (newCount) => {
    setCount(newCount);
  };

  return (
    <>
      <Header />
      <StyledBody>
        <div style={{ marginLeft: "10px" }}>Correct answers: {count}</div>
        <StyledContainer>
          {/* <QuestionCard question={} checkAnswerFn={} correct={} reset={} settingsComponent={}/> */}
          <FactoriseQuadratic count={count} onUpdateCount={onUpdateCount} />
          <SingleBracketFactorise count={count} onUpdateCount={onUpdateCount} />
          <SolvingLinear count={count} onUpdateCount={onUpdateCount} />
          <SolveXBothSides count={count} onUpdateCount={onUpdateCount} />
          <SimplifyLikeTerms count={count} onUpdateCount={onUpdateCount} />
        </StyledContainer>
      </StyledBody>
    </>
  );
}

export default App;
