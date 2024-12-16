import { useState } from "react";
import { Counter } from "./components/Counter/Counter";
import { Settings } from "./components/Settings/Settings";

function App() {
  const [maxValue, setMaxValue] = useState(5);
  const [startValue, setStartValue] = useState(0);

  const changeMaxValue = (value: number) => setMaxValue(value);

  const changeStartValue = (value: number) => setStartValue(value);

  return (
    <div className="app">
      <Settings
        maxValue={maxValue}
        startValue={startValue}
        changeMaxValue={changeMaxValue}
        changeStartValue={changeStartValue}
      />
      <Counter maxValue={maxValue} startValue={startValue} />
    </div>
  );
}

export default App;
