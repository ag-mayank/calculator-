// src/components/Button.js
import React from 'react';

function Button({ value, onClick }) {
  return (
    <button onClick={onClick} className="button">
      {value}
    </button>
  );
}

export default Button;
