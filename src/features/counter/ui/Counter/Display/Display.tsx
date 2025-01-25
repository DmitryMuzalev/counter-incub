import { FC } from "react";

import { Button } from "common/components/Button/Button";

import { useAppDispatch } from "common/hooks/useAppDispatch";
import { useAppSelector } from "common/hooks/useAppSelector";

import {
  getCounterValue,
  incrementCounterValueAC,
  resetCounterValueAC,
} from "features/counter/model/display-reducer";

import { getSettings } from "features/counter/model/settings-reducer";

const Display: FC = () => {
  const { maxValue, startValue, isChange, hasError } =
    useAppSelector(getSettings);
  const counterValue = useAppSelector(getCounterValue);

  const dispatch = useAppDispatch();

  const incrementCounterHandler = () => dispatch(incrementCounterValueAC());

  const resetCounterHandler = () =>
    dispatch(resetCounterValueAC({ value: startValue }));

  const message = hasError ? (
    <span className={"display_error"}>invalid value</span>
  ) : (
    <span className={"display"}>enter values and press 'set'</span>
  );

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
          message
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

export { Display };
