import React from 'react'
import {useState} from 'react';

const App = () => {
  const [input, setInput] = useState("");

  const handleButtonClick = (value) => {
    setInput((prevInput) => prevInput + value);
  };

  const handleClear = () => {
    setInput("");
  };

  const handleDelete = () => {
    setInput((prevInput) => prevInput.slice(0, -1));
  };

  const handleCalculate = () => {
    try {
      // eslint-disable-next-line no-eval
      const result = eval(input);
      setInput(result.toString());
    } catch (error) {
      setInput("Error");
    }
  };

  return (
    <div className="calculator-container">
      {/* Hello, World! */}
      <div className="calculator">
        <div className="display">{input || "0"}</div>
        <div className="buttons">
          <button className="btn control" onClick={handleClear}>
            C
          </button>
          <button className="btn control" onClick={handleDelete}>
            DEL
          </button>
          <button className="btn operator" onClick={() => handleButtonClick("*100")}>
            %
          </button>
          <button className="btn operator" onClick={() => handleButtonClick("/")}>
            /
          </button>
          <button className="btn" onClick={() => handleButtonClick("7")}>
            7
          </button>
          <button className="btn" onClick={() => handleButtonClick("8")}>
            8
          </button>
          <button className="btn" onClick={() => handleButtonClick("9")}>
            9
          </button>
          <button className="btn operator" onClick={() => handleButtonClick("*")}>
            *
          </button>
          <button className="btn" onClick={() => handleButtonClick("4")}>
            4
          </button>
          <button className="btn" onClick={() => handleButtonClick("5")}>
            5
          </button>
          <button className="btn" onClick={() => handleButtonClick("6")}>
            6
          </button>
          <button className="btn operator" onClick={() => handleButtonClick("-")}>
            -
          </button>
          <button className="btn" onClick={() => handleButtonClick("1")}>
            1
          </button>
          <button className="btn" onClick={() => handleButtonClick("2")}>
            2
          </button>
          <button className="btn" onClick={() => handleButtonClick("3")}>
            3
          </button>
          <button className="btn operator" onClick={() => handleButtonClick("+")}>
            +
          </button>
          <button className="btn zero" onClick={() => handleButtonClick("0")}>
            0
          </button>
          <button className="btn" onClick={() => handleButtonClick(".")}>
            .
          </button>
          <button className="btn equals" onClick={handleCalculate}>=</button>
        </div>
      </div>
    </div>
  )
}

export default App