import { useState } from "react";

const App = (props) => {
  const [state, setState] = useState(props);
  const reset = () => setState(props);
  const { name, price } = state;
  return (
    <>
      <p>
        現在の{name}は{price}円です
      </p>
      <button onClick={() => setState({ ...state, price: price + 1 })}>
        +1
      </button>
      <button onClick={() => setState({ ...state, price: price - 1 })}>
        -1
      </button>
      <button onClick={reset}>Reset</button>
      <input
        type="text"
        value={name}
        onChange={(e) => setState({ ...state, name: e.target.value })}
      />
    </>
  );
};

App.defaultProps = {
  name: "サンプル",
  price: 1000,
};

export default App;
