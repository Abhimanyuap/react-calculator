import React, { useState } from "react";
import { evaluate } from "mathjs";

function Calculator() {
  const [result, setResult] = useState('');

  const handleClick = (e) => {
    setResult(prevResult => prevResult + e.target.name);
  };

  const clear = () => {
    setResult('');
  };

  const backspace = () => {
    setResult(prevResult => prevResult.slice(0, -1));
  };

  const calculate = () => {
    try {
      const calculatedResult = evaluate(result);

      if (isNaN(calculatedResult) || !isFinite(calculatedResult)) {
        throw new Error('Invalid expression');
      }

      setResult(calculatedResult.toString());
    } catch (error) {
      setResult('');
    }
  };

  return (
    <>
      <form>
        <input type="text" defaultValue={result} readOnly />
      </form>
      <div className="App_keys">
        <button onClick={clear} id="clear" className="red">Clear</button>
        <button onClick={backspace} id="backspace" className="blue">C</button>
        <button name="/" onClick={handleClick} className="sky">&divide;</button>
        <button name="7" onClick={handleClick}>7</button>
        <button name="8" onClick={handleClick}>8</button>
        <button name="9" onClick={handleClick}>9</button>
        <button name="*" onClick={handleClick} className="sky">&times;</button>
        <button name="4" onClick={handleClick}>4</button>
        <button name="5" onClick={handleClick}>5</button>
        <button name="6" onClick={handleClick}>6</button>
        <button name="-" onClick={handleClick} className="sky">&ndash;</button>
        <button name="1" onClick={handleClick}>1</button>
        <button name="2" onClick={handleClick}>2</button>
        <button name="3" onClick={handleClick}>3</button>
        <button name="+" onClick={handleClick} className="sky">+</button>
        <button name="0" onClick={handleClick}>0</button>
        <button name="." onClick={handleClick}>.</button>
        <button id="result" onClick={calculate} className="sky">=</button>
      </div>
    </>
  );
}

export default Calculator;