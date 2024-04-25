import React, { useState } from 'react';

function useCustomHook(initialValue) {
  const [value, setValue] = useState(initialValue);

  const increment = () => {
    setValue(value + 1);
  };

  const decrement = () => {
    setValue(value - 1);
  };

  return { value, increment, decrement };
}

function CustomCounter() {
  const { value, increment, decrement } = useCustomHook(0);

  return (
    <div>
      <p>Count: {value}</p>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
    </div>
  );
}

export default CustomCounter;
