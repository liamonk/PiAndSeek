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

const StyledSettingsContainer = styled.div`
  display: flex;
  font-size: 15px;
  flex-direction: column;
`;

export default function QuadraticFactorise() {
  const [coefficents, setCoefficents] = React.useState([1, 2, 1]);
  const [userAnswer, setUserAnswer] = React.useState("(? x + ?)(? x + ?)");
  const [correct, setCorrect] = React.useState(false);
  const [incorrect, setIncorrect] = React.useState(false);
  const [correctAnswer, setCorrectAnswer] = React.useState(["(x+1)(x+1)", ""]);
  const [settings, setSettings] = React.useState({
    aGreaterOne: false,
    negativeCoefficents: true,
    showSettings: false,
  });

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

  function newQuestion() {
    /* y = ax^2 + bx + c = h(dx + e)i(fx + g) */
    let d = Math.floor(Math.random() * (settings.aGreaterOne ? 3 : 0)) + 1;
    let e = Math.floor(Math.random() * 11) - 5;
    let f = Math.floor(Math.random() * (settings.aGreaterOne ? 3 : 0)) + 1;
    let g = Math.floor(Math.random() * 11) - 5;
    let a = d * f;
    let b = d * g + e * f;
    let c = e * g;
    let h = 1;
    let i = 1;
    let firstBracketHCF = findHcf(d, e);
    let secondBracketHCF = findHcf(f, g);
    if (firstBracketHCF != 1) {
      h = firstBracketHCF;
      console.log(h);
    }
    if (secondBracketHCF != 1) {
      i = secondBracketHCF;
      console.log(i);
    }
    let solution1 = `${h != 1 ? h : ""}${i != 1 ? i : ""}(${d / h}x+${e / h})(${
      f / i
    }x+${g / i})`
      .replace(/\+\-/g, "-")
      .replace(/1x/g, "x")
      .replace(/ /g, "");
    let solution2 = `${h != 1 ? h : ""}${i != 1 ? i : ""}(${f / i}x+${g / i})(${
      d / h
    }x+${e / h})`
      .replace(/\+\-/g, "-")
      .replace(/1x/g, "x")
      .replace(/ /g, "");
    setCorrectAnswer([solution1, solution2]);
    setCoefficents([a, b, c]);
    setCorrect(false);
    setIncorrect(false);
    setUserAnswer("( x + )( x + )");
  }

  const checkAnswer = () => {
    setUserAnswer((prevAnswer) => {
      let modifiedAnswer = prevAnswer
        .replace(/ /g, "")
        .replace(/\+\-/g, "-")
        .replace(/1x/, "x");
      if (
        modifiedAnswer == correctAnswer[0] ||
        correctAnswer[1] == modifiedAnswer
      ) {
        setCorrect(true);
        setIncorrect(false);
      } else {
        setIncorrect(true);
        setCorrect(false);
      }

      return modifiedAnswer;
    });
    console.log("correctAnswer " + correctAnswer);
  };

  function handleAnswerChange(event) {
    setUserAnswer(event.target.value);
  }

  function showSettings() {
    setSettings((prevSettings) => ({
      ...prevSettings,
      showSettings: !prevSettings.showSettings,
    }));
    console.log(settings.showSettings);
  }

  /*  
  const handleSettingsChange = (settingToChange) => {
    setSettings((prevSettings) => ({
      ...prevSettings,
      [settingToChange]: !prevSettings[settingToChange],
    }));
  };
  */

  const handleSettingsChange = () => {
    setSettings((prevSettings) => ({
      ...prevSettings,
      aGreaterOne: !prevSettings.aGreaterOne,
    }));
  };

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
      <StyledSettingsButton onClick={showSettings}>⚙</StyledSettingsButton>
      <span>
        {settings.showSettings ? (
          <StyledSettingsContainer>
            <p>Change settings</p>
            <StyledButton
              style={{ height: "25px" }}
              onClick={handleSettingsChange}
            >
              {settings.aGreaterOne ? "a > 1" : "a = 1"}
            </StyledButton>
            <StyledButton style={{ height: "25px" }}>
              negatives {settings.negativeCoefficents ? "✓" : "☓"}
            </StyledButton>
          </StyledSettingsContainer>
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
