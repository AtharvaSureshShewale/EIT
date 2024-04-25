// App.js
import React from 'react';
import CustomButton from './customButton';

const App = () => {
  const handleButtonClick = () => {
    alert('Button clicked!');
  };

  return (
    <div>
      <h1>Custom Components Example</h1>
      <CustomButton onClick={handleButtonClick}>Click Me</CustomButton>
    </div>
  );
};

export default App;
