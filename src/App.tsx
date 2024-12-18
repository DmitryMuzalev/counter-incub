import { useState } from "react";
import { Counter } from "./components/Counter/Counter";
import { Settings } from "./components/Settings/Settings";

function App() {
  const [maxValue, setMaxValue] = useState(5);
  const [startValue, setStartValue] = useState(0);
  const [isValidated, setIsValidated] = useState(true);
  const [isChange, setIsChange] = useState(false);

  const changeMaxValue = (value: number) => {
    setMaxValue(value);
    setIsChange(true);
  };

  const changeStartValue = (value: number) => {
    setStartValue(value);
    setIsChange(true);
  };

  const validatorForMaxValue = () => {
    if (maxValue <= startValue) {
      setIsValidated(false);
      return false;
    } else {
      setIsValidated(true);
      return true;
    }
  };

  const validatorForStartValue = () => {
    if (maxValue <= startValue || startValue < 0) {
      setIsValidated(false);
      return false;
    } else {
      setIsValidated(true);
      return true;
    }
  };

  const setSettings = () => setIsChange(false);

  return (
    <div className="app">
      <Settings
        maxValue={maxValue}
        changeMaxValue={changeMaxValue}
        validatorForMaxValue={validatorForMaxValue}
        startValue={startValue}
        changeStartValue={changeStartValue}
        validatorForStartValue={validatorForStartValue}
        isValidated={isValidated}
        isChange={isChange}
        setSettings={setSettings}
      />
      <Counter
        maxValue={maxValue}
        startValue={startValue}
        isChange={isChange}
        isValidated={isValidated}
      />
    </div>
  );
}

export default App;
