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
  flex-direction: row;
`;

export default function FactoriseQuadratic(props) {
  const [questionCoefficents, setQuestionCoefficents] = React.useState([
    1, 2, 1,
  ]);
  const [userAnswer, setUserAnswer] = React.useState("(? x + ?)(? x + ?)");
  const [correct, setCorrect] = React.useState(false);
  const [incorrect, setIncorrect] = React.useState(false);
  const [questionCompleted, setQuestionCompleted] = React.useState(false);
  const [correctAnswer, setCorrectAnswer] = React.useState(["(x+1)(x+1)", ""]);
  const [settings, setSettings] = React.useState({
    aGreaterOne: false,
    negativeCoefficents: false,
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
    /* y = ax^2 + bx + c = h(dx + e)i(fx + g) */
    let d = Math.abs(coefficentGenerator(settings.aGreaterOne ? 5 : 1));
    let e = settings.negativeCoefficents
      ? coefficentGenerator(6)
      : Math.abs(coefficentGenerator(6));
    let f = Math.abs(coefficentGenerator(settings.aGreaterOne ? 2 : 1));
    let g = settings.negativeCoefficents
      ? coefficentGenerator(6)
      : Math.abs(coefficentGenerator(6));
    let a = d * f;
    let b = d * g + e * f;
    let c = e * g;
    let h = 1;
    let i = 1;
    let firstBracketHCF = findHcf(d, e);
    let secondBracketHCF = findHcf(f, g);
    if (firstBracketHCF != 1) {
      h = firstBracketHCF;
    }
    if (secondBracketHCF != 1) {
      i = secondBracketHCF;
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
    setQuestionCoefficents([a, b, c]);
    setCorrect(false);
    setIncorrect(false);
    setUserAnswer("( x + )( x + )");
    setQuestionCompleted(false);
  }

  const checkAnswer = () => {
    setUserAnswer((prevAnswer) => {
      let modifiedAnswer = prevAnswer
        .replace(/ /g, "")
        .replace(/\+\-/g, "-")
        .replace(/\b1x\b/g, "x");
      if (
        modifiedAnswer == correctAnswer[0] ||
        correctAnswer[1] == modifiedAnswer
      ) {
        setCorrect(true);
        setIncorrect(false);
        setQuestionCompleted(true);
        questionCompleted ? {} : updateCount();
      } else {
        setIncorrect(true);
        setCorrect(false);
      }

      return modifiedAnswer;
    });
    console.log("correctAnswer " + correctAnswer[0] + "=" + correctAnswer[1]);
  };

  function handleAnswerChange(event) {
    setUserAnswer(event.target.value);
  }

  function showSettings() {
    setSettings((prevSettings) => ({
      ...prevSettings,
      showSettings: !prevSettings.showSettings,
    }));
  }

  /*  
  const handleSettingsChange = (settingToChange) => {
    setSettings((prevSettings) => ({
      ...prevSettings,
      [settingToChange]: !prevSettings[settingToChange],
    }));
  };
  */

  const handleANegativeSettingsChange = () => {
    setSettings((prevSettings) => ({
      ...prevSettings,
      aGreaterOne: !prevSettings.aGreaterOne,
    }));
  };

  const handleNegativeCoefficentsSettingsChange = () => {
    setSettings((prevSettings) => ({
      ...prevSettings,
      negativeCoefficents: !prevSettings.negativeCoefficents,
    }));
  };

  let firstSign = "";
  if (questionCoefficents[1] >= 0) {
    firstSign = "+";
  } else {
    firstSign = "";
  }

  let secondSign = "";
  if (questionCoefficents[2] >= 0) {
    secondSign = "+";
  } else {
    secondSign = "";
  }
  return (
    <StyledView>
      <StyledSettingsButton onClick={showSettings}>
        Settings ⚙
      </StyledSettingsButton>
      <span>
        {settings.showSettings ? (
          <StyledSettingsContainer>
            <StyledButton
              style={{ height: "30px" }}
              onClick={handleANegativeSettingsChange}
            >
              {settings.aGreaterOne ? "a > 1" : "a = 1"}
            </StyledButton>
            <StyledButton
              style={{ height: "30px" }}
              onClick={handleNegativeCoefficentsSettingsChange}
            >
              negatives {settings.negativeCoefficents ? "✓" : "☓"}
            </StyledButton>
          </StyledSettingsContainer>
        ) : (
          ""
        )}
      </span>
      <h3>Factorise</h3>

      <span>
        {`${questionCoefficents[0] != 1 ? questionCoefficents[0] : ""}x`}
        <sup>2</sup>
        {`${firstSign} ${
          questionCoefficents[1] != 1 ? questionCoefficents[1] : ""
        }x ${secondSign} ${questionCoefficents[2]}`}
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
