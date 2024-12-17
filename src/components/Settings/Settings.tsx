import { FC, useState } from "react";
import { Button } from "../UI/Button/Button";
import { Field } from "../UI/Field/Field";

const Settings: FC = () => {
  const [maxValue, setMaxValue] = useState(5);
  const [startValue, setStartValue] = useState(0);
  const [isValidated, setIsValidated] = useState(true);

  const changeMaxValue = (value: number) => {
    setMaxValue(value);
  };

  const changeStartValue = (value: number) => {
    setStartValue(value);
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

  return (
    <div className="box">
      <div className="box__top">
        <Field
          id="maxValue"
          label="max value"
          changeValue={changeMaxValue}
          value={maxValue}
          validator={validatorForMaxValue}
        />
        <Field
          id="startValue"
          label="start value"
          changeValue={changeStartValue}
          value={startValue}
          validator={validatorForStartValue}
        />
      </div>
      <div className="box__bottom">
        <Button title="set" disabled={!isValidated} />
      </div>
    </div>
  );
};

export { Settings };
