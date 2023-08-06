import React, { useState, useEffect } from 'react';
import './App.css';

const App = () => {
  const [display, setDisplay] = useState('');

  const handleButtonClick = (buttonValue) => {
    setDisplay((prevDisplay) => prevDisplay + buttonValue);
  };

  const handleClear = () => {
    setDisplay('');
  };

  const handleCalculate = () => {
    try {
      const result = eval(display);
      setDisplay(result.toString());
    } catch (error) {
      setDisplay('Error');
    }
  };

  const handleErase = () => {
    setDisplay((prevDisplay) => prevDisplay.slice(0, -1));
  };

  const handleKeyboardInput = (event) => {
    const key = event.key;
    if (
      (key >= '0' && key <= '9') ||
      key === '.' ||
      key === '+' ||
      key === '-' ||
      key === '*' ||
      key === '/' ||
      key === '%' ||
      key === 'Enter'
    ) {
      setDisplay((prevDisplay) => prevDisplay + key);
    } else if (key === 'Backspace') {
      handleErase();
    } else if (key === 'Escape') {
      handleClear();
    }
  };

  useEffect(() => {
    window.addEventListener('keydown', handleKeyboardInput);
    return () => {
      window.removeEventListener('keydown', handleKeyboardInput);
    };
  }, []);

  return (
    
    <div className="calculator">
      <h1 style={{color:'teal'}}>Calculator</h1>
      <div className="display">{display}</div>
      <div className="keypad">
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
        <button onClick={() => handleButtonClick('*')}>&#215;</button>
        <button onClick={() => handleButtonClick('0')}>0</button>
        <button onClick={() => handleButtonClick('.')}>.</button>
        <button>%</button>
        <button onClick={() => handleButtonClick('/')}>&#247;</button>
        <button onClick={handleClear}>C</button>
        <button onClick={handleErase}>Erase</button>
        <button onClick={handleCalculate}>=</button>
        <button>On/Off</button>
      </div>
    </div>
  );
};

export default App;
