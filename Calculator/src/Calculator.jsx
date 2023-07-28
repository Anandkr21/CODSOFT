import React, { useState } from 'react';
import Display from './Display';
import Keypad from './Keypad';

const Calculator = () => {
  const [expression, setExpression] = useState('');

  const handleButtonClick = (buttonValue) => {
    setExpression((prevExpression) => prevExpression + buttonValue);
  };

  const handleClear = () => {
    setExpression('');
  };

  const calculateResult = () => {
    try {
      setExpression(eval(expression).toString());
    } catch (error) {
      setExpression('Error');
    }
  };

  return (
    <div className="calculator">
      <Display expression={expression} />
      <Keypad
        onButtonClick={handleButtonClick}
        onClear={handleClear}
        onCalculate={calculateResult}
      />
    </div>
  );
};

export default Calculator;
