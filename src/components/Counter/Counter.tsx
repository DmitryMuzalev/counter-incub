import { FC, useState } from "react";
import { Button } from "../UI/Button/Button";

const Counter: FC = () => {
  const [counterValue, setCounterValue] = useState(0);

  const testMaxValue = 5;
  const testIsSetSettings = true;

  const incrementCounterHandler = () => {
    setCounterValue((prevCounterValue) => prevCounterValue + 1);
  };

  const resetCounterHandler = () => {
    setCounterValue(0);
  };

  return (
    <div className="box">
      <div className="box__top">
        {testIsSetSettings ? (
          <span
            className={
              testMaxValue === counterValue
                ? "counter-value_max"
                : "counter-value"
            }
          >
            {counterValue}
          </span>
        ) : (
          <span className="display">enter values and press 'set'</span>
        )}
      </div>
      <div className="box__bottom">
        <Button
          title="inc"
          onClick={incrementCounterHandler}
          disabled={testMaxValue === counterValue || !testIsSetSettings}
        />
        <Button
          title="reset"
          onClick={resetCounterHandler}
          disabled={!testIsSetSettings}
        />
      </div>
    </div>
  );
};

export { Counter };
