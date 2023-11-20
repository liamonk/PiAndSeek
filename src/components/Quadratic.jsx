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
  overflow: clip;
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
  const [userAnswer, setUserAnswer] = React.useState("(? x + ?)(? x + ?)");
  const [correct, setCorrect] = React.useState(false);
  const [incorrect, setIncorrect] = React.useState(false);
  const [correctAnswer, setCorrectAnswer] = React.useState("(x+1)(x+1)");
  const [settings, setSettings] = React.useState({
    aNegative: false,
    showSettings: false,
  });

  function newQuestion() {
    /* y = ax^2 + bx + c = (dx + e)(fx + g) */
    let d = Math.floor(Math.random() * 3) + 1;
    let e = Math.floor(Math.random() * 11) - 5;
    let f = Math.floor(Math.random() * 3) + 1;
    let g = Math.floor(Math.random() * 11) - 5;
    let a = d * f;
    let b = d * g + e * f;
    let c = e * g;
    let solution = `(${d}x+${e})(${f}x+${g})`
      .replace(/\+\-/g, "-")
      .replace(/1x/, "x");
    setCorrectAnswer(solution);
    setCoefficents([a, b, c]);
    setCorrect(false);
    setIncorrect(false);
    setUserAnswer("( x + )( x + )");
  }

  const checkAnswer = () => {
    let reordedAnswer = "";
    setUserAnswer((prevAnswer) => {
      let modifiedAnswer = prevAnswer
        .replace(/ /g, "")
        .replace(/\+\-/g, "-")
        .replace(/1x/, "x");
      reordedAnswer = modifiedAnswer.split(")(");
      reordedAnswer = "(" + reordedAnswer[1] + reordedAnswer[0] + ")";
      if (modifiedAnswer == correctAnswer || correctAnswer == reordedAnswer) {
        setCorrect(true);
        setIncorrect(false);
      } else setIncorrect(true);
      return modifiedAnswer;
    });
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

  let firstSign = "";
  if (coefficents[1] >= 0) {
    firstSign = "+";
  } else {
    firstSign = "";
  }

  let secondSign = "";
  if (coefficents[2] >= 0) {
    secondSign = "+";
  } else {
    secondSign = "";
  }
  return (
    <StyledView>
      <StyledSettingsButton onClick={handleSettings}>⚙</StyledSettingsButton>
      <span>
        {settings.showSettings ? (
          <div>
            <p>Change settings</p>
          </div>
        ) : (
          ""
        )}
      </span>
      <h3>Factorise</h3>

      <span>
        {`${coefficents[0] != 1 ? coefficents[0] : ""}x`}
        <sup>2</sup>
        {`${firstSign} ${
          coefficents[1] != 1 ? coefficents[1] : ""
        }x ${secondSign} ${coefficents[2]}`}
      </span>

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
