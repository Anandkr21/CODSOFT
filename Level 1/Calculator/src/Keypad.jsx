import React from 'react';

const Keypad = ({ onButtonClick, onClear, onCalculate }) => {
  const buttons = [
    '7', '8', '9', '/',
    '4', '5', '6', '*',
    '1', '2', '3', '-',
    '0', '.', '=', '+'
  ];

  return (
    <div className="keypad">
      {buttons.map((button) => (
        <button
          key={button}
          onClick={() => onButtonClick(button)}
          className={`button ${button === '=' ? 'equals' : ''}`}
        >
          {button}
        </button>
      ))}
      <button onClick={onClear} className="button clear">C</button>
      <button onClick={onCalculate} className="button calculate">=</button>
    </div>
  );
};

export default Keypad;
