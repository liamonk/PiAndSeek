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
  font-family: "Smooch Sans", sans-serif;
  font-weight: 700;

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

const StyledSettingsButton = styled.button`
  margin-left: auto;
  border: none;
  background-color: #fedaf6;
  font-family: "Smooch Sans", sans-serif;
  border-radius: 5px;

  &:hover {
    background-color: #e5c6ff;
  }
`;

const StyledSettingsContainer = styled.div`
  display: flex;
  font-size: 15px;
  flex-direction: column;
`;

export default function SingleBracketFactorise(props) {
  const [userAnswer, setUserAnswer] = React.useState("?(x+ ?)");
  const [coefficents, setCoefficents] = React.useState([2, 4]);
  const [correct, setCorrect] = React.useState(false);
  const [incorrect, setIncorrect] = React.useState(false);
  const [questionCompleted, setQuestionCompleted] = React.useState(false);
  const [correctAnswer, setCorrectAnswer] = React.useState("2(x+2)");
  const [settings, setSettings] = React.useState({
    aNegative: false,
    showSettings: false,
  });
  const updateCount = () => {
    const updatedCount = props.count + 1;
    props.onUpdateCount(updatedCount);
  };

  function findHcf(a, b) {
    a = Math.abs(Math.floor(a));
    b = Math.abs(Math.floor(b));
    while (b !== 0) {
      let temp = b;
      b = a % b;
      a = temp;
    }
    return a;
  }

  function coefficentGenerator(range) {
    let coefficent = Math.floor(Math.random() * range) + 1;
    let sign = Math.random();
    sign < 0.5 ? (sign = -1) : (sign = 1);
    return coefficent * sign;
  }

  function newQuestion() {
    /* a(bx + c) = dx + e */
    let a = Math.abs(coefficentGenerator(6) + 1);
    let b = coefficentGenerator(6);
    let c = coefficentGenerator(6);
    let d = a * b;
    let e = a * c;
    setCoefficents([d, e]);
    let divisor = findHcf(b, c);
    let solution = `${a * divisor}(${b / divisor}x+${c / divisor})`
      .replace(/\+\-/g, "-")
      .replace(/1x/, "x");
    setCorrectAnswer(solution);
    setCorrect(false);
    setIncorrect(false);
    setUserAnswer("( x + )");
    setQuestionCompleted(false);
    console.log("correctAnswer " + correctAnswer);
  }

  let firstSign = "";
  if (coefficents[1] >= 0) {
    firstSign = "+";
  } else {
    firstSign = "";
  }

  function checkAnswer() {
    setUserAnswer((prevAnswer) => {
      let modifiedAnswer = prevAnswer
        .replace(/ /g, "")
        .replace(/\+\-/g, "-")
        .replace(/1x/, "x");

      if (modifiedAnswer === correctAnswer) {
        setCorrect(true);
        setIncorrect(false);
        setQuestionCompleted(true);
        questionCompleted ? {} : updateCount();
      } else setIncorrect(true);
      return modifiedAnswer;
    });
  }

  function handleAnswerChange(event) {
    setUserAnswer(event.target.value);
  }

  function handleSettings() {
    setSettings((prevSettings) => ({
      ...prevSettings,
      showSettings: !prevSettings.showSettings,
    }));
    console.log(settings.showSettings);
  }

  return (
    <StyledView>
      <StyledSettingsButton onClick={handleSettings}>
        Settings ⚙
      </StyledSettingsButton>
      <StyledSettingsContainer>
        {settings.showSettings ? (
          <div>
            <p>Change settings</p>
          </div>
        ) : (
          ""
        )}
      </StyledSettingsContainer>
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
        {incorrect ? `Try again! (common factor is never negative)` : ""}
      </span>
    </StyledView>
  );
}
