import { FC } from "react";
import { Button } from "../UI/Button/Button";
import { useDispatch, useSelector } from "react-redux";
import {
  incrementCounterValueAC,
  resetCounterValueAC,
  RootState,
} from "../../app/store";

const Counter: FC = () => {
  const { maxValue, counterValue, isChange, hasError } = useSelector<
    RootState,
    RootState
  >((store) => store);

  const dispatch = useDispatch();

  const incrementCounterHandler = () => dispatch(incrementCounterValueAC());

  const resetCounterHandler = () => dispatch(resetCounterValueAC());

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

export { Counter };
