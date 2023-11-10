import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Quadratic from "./components/Quadratic.jsx";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>Quadratic question generator</div>
      <Quadratic />
    </>
  );
}

export default App;
