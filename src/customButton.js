// CustomButton.js
import React from 'react';

const buttonStyle = {
  backgroundColor: '#007bff',
  color: '#fff',
  border: 'none',
  padding: '10px 20px',
  cursor: 'pointer',
  fontSize: '16px',
  borderRadius: '5px',
};

const CustomButton = ({ onClick, children }) => {
  return (
    <button style={buttonStyle} onClick={onClick}>
      {children}
    </button>
  );
};

export default CustomButton;
