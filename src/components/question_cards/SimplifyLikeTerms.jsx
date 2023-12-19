import React from "react";
import styled from "styled-components";

const StyledView = styled.div`
  background-color: #fedaf6;
  padding: 10px;
  font-size: 20px;
  color: #ac5293;
  margin: 25px;
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

export default function SimplifyLikeTerms(props) {
  const [userAnswer, setUserAnswer] = React.useState("?x + ?y");
  const [coefficents, setCoefficents] = React.useState([2, 4, 6, 8]);
  const [correct, setCorrect] = React.useState(false);
  const [incorrect, setIncorrect] = React.useState(false);
  const [questionCompleted, setQuestionCompleted] = React.useState(false);
  const [correctAnswer, setCorrectAnswer] = React.useState("8x+12y");
  const [settings, setSettings] = React.useState({});
  const updateCount = () => {
    const updatedCount = props.count + 1;
    props.onUpdateCount(updatedCount);
  };

  function coefficentGenerator(range) {
    let coefficent = Math.floor(Math.random() * range) + 1;
    let sign = Math.random();
    sign < 0.5 ? (sign = -1) : (sign = 1);
    return coefficent * sign;
  }

  function newQuestion() {
    /* ax+by+cx+dy */
    let a = coefficentGenerator(6) + 1;
    let b = coefficentGenerator(6) + 1;
    let c = coefficentGenerator(6) + 1;
    let d = coefficentGenerator(6) + 1;
    setCoefficents([a, b, c, d]);
    let solution = `${a + c}x+${b + d}y`
      .replace(/\+\-/g, "-")
      .replace(/\b1x\b/g, "x");
    setCorrectAnswer(solution);
    setCorrect(false);
    setIncorrect(false);
    setUserAnswer("?x + ?y");
    setQuestionCompleted(false);
    console.log(solution);
    console.log("correctAnswer " + correctAnswer);
  }

  function checkAnswer() {
    setUserAnswer((prevAnswer) => {
      let modifiedAnswer = prevAnswer
        .replace(/ /g, "")
        .replace(/\+\-/g, "-")
        .replace(/\b1x\b/g, "x");

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
      <h3>Simpify</h3>
      <span>{`${coefficents[0]}x 
      ${coefficents[1] >= 0 ? "+" : ""} ${coefficents[1]}y 
      ${coefficents[2] >= 0 ? "+" : ""} ${coefficents[2]}x
      ${coefficents[3] >= 0 ? "+" : ""} ${coefficents[3]}y`}</span>
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
