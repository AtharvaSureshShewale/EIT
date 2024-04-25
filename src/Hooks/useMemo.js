import React, { useMemo, useState } from 'react';

function ExpensiveCalculation({ count }) {
  // Some expensive calculation based on count
  const result = useMemo(() => {
    let result = 0;
    for (let i = 0; i < count; i++) {
      result += i;
    }
    return result;
  }, [count]);

  return <p>Result: {result}</p>;
}

function MemoComponent() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <button onClick={() => setCount(count + 1)}>Increment Count</button>
      <ExpensiveCalculation count={count} />
    </div>
  );
}

export default MemoComponent;
