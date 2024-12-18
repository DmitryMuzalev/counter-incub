import { FC, useEffect, useState } from "react";
import { Button } from "../UI/Button/Button";

type Props = {
  maxValue: number;
  startValue: number;
  isChange: boolean;
  isValidated: boolean;
};

const Counter: FC<Props> = (props) => {
  const { maxValue, startValue, isChange, isValidated } = props;

  const [counterValue, setCounterValue] = useState(startValue);

  useEffect(() => {
    setCounterValue(startValue);
  }, [startValue, maxValue]);

  const incrementCounterHandler = () => {
    setCounterValue((prevCounterValue) => prevCounterValue + 1);
  };

  const resetCounterHandler = () => {
    setCounterValue(startValue);
  };

  const message = isValidated
    ? "enter values and press 'set'"
    : "invalid value";

  return (
    <div className="box">
      <div className="box__top">
        {!isChange ? (
          <span
            className={
              maxValue === counterValue ? "counter-value_max" : "counter-value"
            }
          >
            {counterValue}
          </span>
        ) : (
          <span className={"display"}>{message}</span>
        )}
      </div>
      <div className="box__bottom">
        <Button
          title="inc"
          onClick={incrementCounterHandler}
          disabled={maxValue === counterValue || isChange}
        />
        <Button
          title="reset"
          onClick={resetCounterHandler}
          disabled={isChange}
        />
      </div>
    </div>
  );
};

export { Counter };
