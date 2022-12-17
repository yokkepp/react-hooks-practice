import { useState } from "react";
const App = () => {
  const [count, setCount] = useState(0);
  const increment = () => setCount(count + 1);
  const decrement = () => setCount(count - 1);

  const increment2 = () => setCount((v) => v + 1);
  const decrement2 = () => setCount((v) => v - 1);

  const reset = () => setCount(0);
  const double = () => setCount(count * 2);
  const double2 = () => setCount((v) => v * 2);

  const tripleOnly = () => {
    if (count % 3 === 0) {
      setCount(count / 3);
    }
  };

  return (
    <>
      <div>count: {count}</div>
      <button onClick={increment}>+1</button>
      <button onClick={decrement}>-1</button>
      <button onClick={increment2}>+1</button>
      <button onClick={increment2}>-1</button>
      <button onClick={reset}>reset</button>
      <button onClick={double}>*2</button>
      <button onClick={double2}>*2</button>
      <button onClick={tripleOnly}>3の倍数の時だけ３で割る</button>
    </>
  );
};

export default App;
