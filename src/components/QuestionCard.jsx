import React from "react";
import styled from "styled-components";

/*Working on migrating to this as the base component 
with the question and check answer functionality as a prop*/

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
  color: AC5293;
`;

const StyledSettingsButton = styled.button`
  margin-left: auto;
  border: none;
  background-color: #fedaf6;
`;

export default function QuadraticFactorise() {
  const [coefficents, setCoefficents] = React.useState([1, 2, 1]);
  const [userAnswer, setUserAnswer] = React.useState("");
  const [correct, setCorrect] = React.useState(false);
  const [incorrect, setIncorrect] = React.useState(false);
  const [correctAnswer, setCorrectAnswer] = React.useState("");
  const [settings, setSettings] = React.useState({
    aNegative: false,
    showSettings: false,
  });

  function newQuestion() {}

  const checkAnswer = () => {
    if (userAnswer == correctAnswer || correctAnswer == reordedUserAnswer) {
      setCorrect(true);
      setIncorrect(false);
    } else setIncorrect(true);
    console.log("correctAnswer " + correctAnswer);
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
      <StyledSettingsButton onClick={handleSettings}>⚙</StyledSettingsButton>
      <span>{settings.showSettings ? <div>Change settings</div> : ""}</span>
      <h3>{/* Title  */}</h3>

      <span>{/*Question here */}</span>

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
