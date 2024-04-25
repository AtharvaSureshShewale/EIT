import React, { useState, useCallback } from 'react';

function ChildComponent({ increment }) {
  return <button onClick={increment}>Increment</button>;
}

function ParentComponent() {
  const [count, setCount] = useState(0);

  const increment = useCallback(() => {
    setCount(count + 1);
  }, [count]);

  return (
    <div>
      <p>Count: {count}</p>
      <ChildComponent increment={increment} />
    </div>
  );
}

export default ParentComponent;
