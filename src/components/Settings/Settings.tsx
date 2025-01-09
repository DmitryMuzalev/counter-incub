import { ChangeEvent, FC } from "react";
import { Button } from "../UI/Button/Button";
import { Field } from "../UI/Field/Field";
import { useDispatch, useSelector } from "react-redux";
import {
  changeMaxValueAC,
  changeStartValueAC,
  RootState,
  setSettingsAC,
} from "../../app/store";

const Settings: FC = () => {
  const dispatch = useDispatch();
  const { maxValue, startValue, isChange, hasError } = useSelector<
    RootState,
    RootState
  >((store) => store);

  const changeMaxValueHandler = (e: ChangeEvent<HTMLInputElement>) => {
    const value = +e.target.value;
    dispatch(changeMaxValueAC({ value }));
  };

  const changeStartValueHandler = (e: ChangeEvent<HTMLInputElement>) => {
    const value = +e.target.value;
    dispatch(changeStartValueAC({ value }));
  };

  const setSettingsHandler = () => dispatch(setSettingsAC());

  return (
    <div className="box">
      <div className="box__top">
        <Field
          id="maxValue"
          label="max value"
          type="number"
          onChange={changeMaxValueHandler}
          value={maxValue}
          className={
            maxValue <= startValue || maxValue < 0 ? "field-error" : ""
          }
        />
        <Field
          id="startValue"
          label="start value"
          type="number"
          onChange={changeStartValueHandler}
          value={startValue}
          className={
            maxValue <= startValue || startValue < 0 ? "field-error" : ""
          }
        />
      </div>
      <div className="box__bottom">
        <Button
          title="set"
          onClick={() => setSettingsHandler()}
          disabled={!isChange || hasError}
        />
      </div>
    </div>
  );
};

export { Settings };
