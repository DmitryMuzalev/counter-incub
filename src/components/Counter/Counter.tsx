import { FC, useState } from "react";
import { Button } from "../UI/Button/Button";

type Props = {
  maxValue: number;
  startValue: number;
};

const Counter: FC<Props> = ({ maxValue, startValue }) => {
  const [counterValue, setCounterValue] = useState(startValue);

  const incrementCounterHandler = () => {
    setCounterValue((prevCounterValue) => prevCounterValue + 1);
  };

  const resetCounterHandler = () => {
    setCounterValue(startValue);
  };

  return (
    <div className="box">
      <div className="box__top">
        <span
          className={
            counterValue === maxValue ? "counter-value_max" : "counter-value"
          }
        >
          {counterValue}
        </span>
      </div>
      <div className="box__bottom">
        <Button
          title="inc"
          disabled={counterValue === maxValue}
          onClick={incrementCounterHandler}
        />
        <Button title="reset" onClick={resetCounterHandler} />
      </div>
    </div>
  );
};

export { Counter };
