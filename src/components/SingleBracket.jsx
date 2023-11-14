import React from "react";
import styled from "styled-components";

const StyledView = styled.div`
  background-color: #fedaf6;
  padding: 10px;
  font-size: 20px;
  color: #ac5293;
  margin: 5px;
  display: flex;
  flex-direction: column;
  text-align: center;
  border-radius: 5px;
  width: 400px;
`;

const StyledButton = styled.button`
  background-color: #dffffa;
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid #bffcff;
  border-radius: 3px;
  width: 10em;
  margin-left: auto;
  margin-right: auto;
  color: #ac5293;

  &:hover {
    background-color: #e5c6ff;
  }
`;

const StyledTextArea = styled.textarea`
  width: 300px;
  height: 50px;
  margin-left: auto;
  margin-right: auto;
  margin-top: 20px;
  text-align: centre;
  font-size: 20px;
  max-width: 90%;
`;

export default function SingleBracketFactorise() {
  const [userAnswer, setUserAnswer] = React.useState("?(x+ ?)");
  const [coefficents, setCoefficents] = React.useState([2, 4]);
  const [correct, setCorrect] = React.useState(false);
  const [incorrect, setIncorrect] = React.useState(false);
  const [correctAnswer, setCorrectAnswer] = React.useState("2(x+2)");

  function newQuestion() {
    /* a(bx + c) = dx + e */
    let a = Math.floor(Math.random() * 11) + 1;
    let b = Math.floor(Math.random() * 11) - 5;
    let c = Math.floor(Math.random() * 11) - 5;
    let d = a * b;
    let e = a * c;
    setCoefficents([d, e]);
    let solution = `${a}(${b}x+${c})`.replace(/\+\-/g, "-").replace(/1x/, "x");
    setCorrectAnswer(solution);
    setCorrect(false);
    setIncorrect(false);
    setUserAnswer("( x + )");
    console.log(a, b, c, d, e);
  }

  let firstSign = "";
  if (coefficents[1] >= 0) {
    firstSign = "+";
  } else {
    firstSign = "";
  }

  function checkAnswer() {
    setUserAnswer((prevAnswer) =>
      prevAnswer.replace(/ /g, "").replace(/\+\-/g, "-").replace(/1x/, "x")
    );
    if (userAnswer == correctAnswer) {
      setCorrect(true);
      setIncorrect(false);
    } else setIncorrect(true);
    console.log("correctAnswer " + correctAnswer);
  }

  function handleAnswerChange(event) {
    setUserAnswer(event.target.value);
  }

  return (
    <StyledView>
      <h3>Factorise</h3>
      <span>{`${coefficents[0]}x ${firstSign} ${coefficents[1]}
        `}</span>
      <StyledTextArea
        value={userAnswer}
        onChange={handleAnswerChange}
      ></StyledTextArea>
      <StyledButton onClick={checkAnswer}>Check answer</StyledButton>
      <StyledButton onClick={newQuestion}>New Question</StyledButton>
      <span>
        {correct ? "Well done!" : ""}
        {incorrect ? "Try again!" : ""}
      </span>
    </StyledView>
  );
}
