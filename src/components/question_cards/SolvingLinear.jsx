import React from "react";
import styled from "styled-components";
import { StyledView } from "./CardStyles";
import { StyledButton } from "./CardStyles";
import { StyledTextArea } from "./CardStyles";
import { StyledSettingsButton } from "./CardStyles";
import {StyledSettingsContainer} from "./CardStyles";


export default function QuadraticFactorise(props) {
  const [coefficents, setCoefficents] = React.useState([2, 3, 4, 10]);
  const [userAnswer, setUserAnswer] = React.useState("x=?");
  const [correct, setCorrect] = React.useState(false);
  const [incorrect, setIncorrect] = React.useState(false);
  const [questionCompleted, setQuestionCompleted] = React.useState(false);
  const [correctAnswer, setCorrectAnswer] = React.useState("x=3");
  const [settings, setSettings] = React.useState({
    aNegative: false,
    showSettings: false,
  });
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
    setQuestionCompleted(false);
    setUserAnswer("x=?");
  }

  const checkAnswer = () => {
    setUserAnswer((prevAnswer) => {
      let modifiedAnswer = prevAnswer.replace(/ /g, "");
      if (modifiedAnswer == correctAnswer) {
        setCorrect(true);
        setIncorrect(false);
        setQuestionCompleted(true);
        questionCompleted ? {} : updateCount();
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
