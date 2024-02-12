import React, { useState } from "react";
import styled from "styled-components";
import { StyledView } from "./CardStyles";
import { StyledButton } from "./CardStyles";
import { StyledTextArea } from "./CardStyles";
import { StyledSettingsButton } from "./CardStyles";
import { StyledSettingsContainer } from "./CardStyles";
import { MathHelper } from "../../mathHelper";

export default function QuestionCard(props) {
  const [questionCoefficents, setQuestionCoefficents] = useState([1, 2, 1]);
  const [userAnswer, setUserAnswer] = useState("(? x + ?)(? x + ?)");
  
  const [correct, setCorrect] = useState(false);
  const [incorrect, setIncorrect] = useState(false);
  const [questionCompleted, setQuestionCompleted] = useState(false);
  const [correctAnswer, setCorrectAnswer] = useState(["(x+1)(x+1)", ""]);
  
  const [aGreaterOne, setAGreaterOne] = useState(false);
  const [negativeCoefficents, setNegativeCoefficents] = useState(false);
  const [showSettings, setShowSettings] = useState(false);

  const updateCount = () => {
    const updatedCount = props.count + 1;
    props.onUpdateCount(updatedCount);
  };

  function handleAnswerChange(event) {
    setUserAnswer(event.target.value);
  }

  


  return (
    <StyledView>
      <StyledSettingsButton
        onClick={() => {
          setShowSettings(!showSettings);
        }}
      >
        Settings ⚙
      </StyledSettingsButton>
      <span>
        {showSettings ? (
          <StyledSettingsContainer>
            <StyledButton
              style={{ height: "30px" }}
              onClick={() => setAGreaterOne(!aGreaterOne)}
            >
              {aGreaterOne ? "a > 1" : "a = 1"}
            </StyledButton>
            <StyledButton
              style={{ height: "30px" }}
              onClick={() => setNegativeCoefficents(!negativeCoefficents)}
            >
              negatives {negativeCoefficents ? "✓" : "☓"}
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
