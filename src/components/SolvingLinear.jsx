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
  color: AC5293;
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

export default function QuadraticFactorise() {
  const [coefficents, setCoefficents] = React.useState([2, 3, 4, 10]);
  const [userAnswer, setUserAnswer] = React.useState("x=?");
  const [correct, setCorrect] = React.useState(false);
  const [incorrect, setIncorrect] = React.useState(false);
  const [correctAnswer, setCorrectAnswer] = React.useState("x=3");
  const [settings, setSettings] = React.useState({
    aNegative: false,
    showSettings: false,
  });

  function coefficentGenerator(range) {
    let coefficent = Math.floor(Math.random() * range) + 1;
    let sign = Math.random();
    sign < 0.5 ? (sign = -1) : (sign = 1);
    return coefficent * sign;
  }

  function newQuestion() {
    /*ax+b=c*/
    let a = coefficentGenerator(12);
    let b = coefficentGenerator(12);
    let x = coefficentGenerator(12);
    let c = a * x + b;
    setCoefficents([a, x, b, c]);
    let solution = `x=${x}`;
    setCorrectAnswer(solution);
    setCorrect(false);
    setIncorrect(false);
    setUserAnswer("x=?");
  }

  const checkAnswer = () => {
    setUserAnswer((prevAnswer) => {
      let modifiedAnswer = prevAnswer.replace(/ /g, "");
      if (modifiedAnswer == correctAnswer) {
        setCorrect(true);
        setIncorrect(false);
      } else setIncorrect(true);
      console.log("correctAnswer " + correctAnswer);
      console.log(coefficents);
      return modifiedAnswer;
    });
  };

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
        {settings.showSettings ? <div>Change settings</div> : ""}
      </StyledSettingsContainer>
      <h3>Solve</h3>

      <span>{`${coefficents[0]}x${coefficents[2] > -1 ? "+" : ""}${
        coefficents[2]
      }=${coefficents[3]}`}</span>

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
