import React, { useState } from 'react';
import './Calculator.css';
import { evaluate } from 'mathjs';


function Calculator() {
  const [expression, setExpression] = useState('');
  const [history, setHistory] = useState([]);

  function handleButtonClick(value) {
    setExpression(expression + value);
  }

  function handleEqualsClick() {
    try {
      const result = evaluate(expression);
      setHistory([...history, `${expression} = ${result}`]);
      setExpression(result.toString());
    } catch (error) {
      setExpression('Erro');
    }
  }

  function handleClearClick() {
    setExpression('');
    setHistory([]);
  }

  return (
    <div className="calculator">
      <h1>Calculadora Hello Kitty</h1>
      <div className="display">
        <p>{expression}</p>
        <ul>
          {history.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
       
      </div>

      <div className="buttons">
        <button onClick={() => handleButtonClick('7')}>7</button>
        <button onClick={() => handleButtonClick('8')}>8</button>
        <button onClick={() => handleButtonClick('9')}>9</button>
        <button onClick={() => handleButtonClick('+')}>+</button>
        <button onClick={() => handleButtonClick('4')}>4</button>
        <button onClick={() => handleButtonClick('5')}>5</button>
        <button onClick={() => handleButtonClick('6')}>6</button>
        <button onClick={() => handleButtonClick('-')}>-</button>
        <button onClick={() => handleButtonClick('1')}>1</button>
        <button onClick={() => handleButtonClick('2')}>2</button>
        <button onClick={() => handleButtonClick('3')}>3</button>
        <button onClick={() => handleButtonClick('*')}>*</button>
        <button onClick={() => handleButtonClick('0')}>0</button>
        <button onClick={() => handleButtonClick('.')}>.</button>
        <button onClick={handleEqualsClick}>=</button>
        <button onClick={() => handleButtonClick('/')}>/</button>
        <button onClick={handleClearClick}>C</button>
      </div>
    </div>
  );
}

export default Calculator;