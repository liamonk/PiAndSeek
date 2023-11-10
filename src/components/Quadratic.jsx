import React from "react";

export default function Quadratic() {
  const [coefficents, setCoefficents] = React.useState([1, 2, 1]);
  const [answer, setAnswer] = React.useState("( x + )( x + )");
  const [correct, setCorrect] = React.useState(false);
  const [incorrect, setIncorrect] = React.useState(false);
  const [correctAnswer, setCorrectAnswer] = React.useState("test");

  function coefficentGenerator() {
    /* y = ax^2 + bx + c = (dx + e)(fx + g) */
    let d = Math.floor(Math.random() * 3) + 1;
    let e = Math.floor(Math.random() * 11) - 5;
    let f = Math.floor(Math.random() * 3) + 1;
    let g = Math.floor(Math.random() * 11) - 5;
    let a = d * f;
    let b = d * g + e * f;
    let c = e + g;
    let solution = `(${d}x+${e})(${f}x+${g})`
      .replace(/\+\-/g, "-")
      .replace(/1x/, "x");
    setCorrectAnswer(solution);
    setCoefficents([a, b, c]);
    setCorrect(false);
  }

  const checkAnswer = () => {
    setAnswer((prevAnswer) =>
      prevAnswer.replace(/ /g, "").replace(/\+\-/g, "-").replace(/1x/, "x")
    );
    if (answer == correctAnswer) {
      setCorrect(true);
      setIncorrect(false);
    } else setIncorrect(true);
  };

  function handleAnswerChange(event) {
    setAnswer(event.target.value);
  }

  let firstSign = "";
  if (coefficents[1] >= 0) {
    firstSign = "+";
  } else {
    firstSign = "";
  }

  let secondSign = "";
  if (coefficents[1] >= 0) {
    secondSign = "+";
  } else {
    secondSign = "";
  }
  return (
    <>
      <h3>Factorise</h3>
      {/*renders a quadratic*/}
      <span>
        {`${coefficents[0] != 1 ? coefficents[0] : ""}x`}
        <sup>2</sup>
        {`${firstSign} ${coefficents[1]}x ${secondSign} ${coefficents[2]} = 0`}
      </span>
      <br></br>
      <textarea value={answer} onChange={handleAnswerChange}></textarea>
      <br></br>
      <button onClick={checkAnswer}>Check answer</button>
      <button onClick={coefficentGenerator}>New Question</button>
      <span>
        {correct ? "Well done!" : ""}
        {incorrect ? "Try again!" : ""}
      </span>
      <br></br>
      {`answer ${answer}`}
      <br></br>
      {`correct Answer${correctAnswer}`}
    </>
  );
}
