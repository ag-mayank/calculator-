import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [input, setInput] = useState('');
  const [output, setOutput] = useState('');

  const handleClick = (value) => {
    setInput(input + value);
  };

  const calculate = () => {
    try {
      setOutput(eval(input)); 
    } catch (err) {
      setOutput('Error');
    }
    setInput('');
  };

  const handleKeyDown = (event) => {
    const key = event.key;
    if (/^[0-9+\-*/().]$/.test(key)) {
      setInput((prev) => prev + key);
    } else if (key === 'Enter') {
      calculate();
    } else if (key === 'Backspace') {
      deleteLastCharacter();
    }
  };

  const deleteLastCharacter = () => {
    setInput((prev) => prev.slice(0, -1));
  };

  const clearInput = () => {
    setInput('');
    setOutput('');
  };

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [input]);

  return (
    <div className="app">
      <h1 className="calculator-heading">Scientific Calculator</h1>
      <div className="calculator">
        <div className="display">{output || input || '0'}</div>
        <div className="buttons">
          {/* Clear and Delete buttons */}
          <button className="button clear" onClick={clearInput}>C</button>
          <button className="button delete" onClick={deleteLastCharacter}>DEL</button>

          {/* Number buttons */}
          <button className="button" onClick={() => handleClick('7')}>7</button>
          <button className="button" onClick={() => handleClick('8')}>8</button>
          <button className="button" onClick={() => handleClick('9')}>9</button>
          <button className="button" onClick={() => handleClick('4')}>4</button>
          <button className="button" onClick={() => handleClick('5')}>5</button>
          <button className="button" onClick={() => handleClick('6')}>6</button>
          <button className="button" onClick={() => handleClick('1')}>1</button>
          <button className="button" onClick={() => handleClick('2')}>2</button>
          <button className="button" onClick={() => handleClick('3')}>3</button>
          <button className="button" onClick={() => handleClick('0')}>0</button>
          <button className="button" onClick={() => handleClick('.')}>.</button>

          {/* Operator buttons */}
          <button className="button operator" onClick={() => handleClick('/')}>/</button>
          <button className="button operator" onClick={() => handleClick('*')}>*</button>
          <button className="button operator" onClick={() => handleClick('-')}>-</button>
          <button className="button operator" onClick={() => handleClick('+')}>+</button>
          <button className="button equals" onClick={calculate}>=</button>

          {/* Scientific functions */}
          <button className="button scientific" onClick={() => handleClick('Math.sin(')}>sin</button>
          <button className="button scientific" onClick={() => handleClick('Math.cos(')}>cos</button>
          <button className="button scientific" onClick={() => handleClick('Math.tan(')}>tan</button>
          <button className="button scientific" onClick={() => handleClick('Math.sqrt(')}>√</button>
          <button className="button scientific" onClick={() => handleClick('Math.pow(')}>x²</button>
        </div>
      </div>
    </div>
  );
}

export default App;
