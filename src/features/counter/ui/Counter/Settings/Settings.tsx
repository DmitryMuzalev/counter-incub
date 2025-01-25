import { ChangeEvent, FC } from "react";

import { useAppDispatch } from "common/hooks/useAppDispatch";
import { useAppSelector } from "common/hooks/useAppSelector";

import {
  changeMaxValueAC,
  changeStartValueAC,
  getSettings,
  setSettingsAC,
} from "features/counter/model/settings-reducer";
import { Field } from "common/components/Field/Field";
import { Button } from "common/components/Button/Button";

const Settings: FC = () => {
  const dispatch = useAppDispatch();
  const { maxValue, startValue, isChange, hasError } =
    useAppSelector(getSettings);

  const changeMaxValueHandler = (e: ChangeEvent<HTMLInputElement>) => {
    const value = +e.target.value;
    dispatch(changeMaxValueAC({ value }));
  };

  const changeStartValueHandler = (e: ChangeEvent<HTMLInputElement>) => {
    const value = +e.target.value;
    dispatch(changeStartValueAC({ value }));
  };

  const setSettingsHandler = () =>
    dispatch(setSettingsAC({ value: startValue }));

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
