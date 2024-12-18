import { FC } from "react";
import { Button } from "../UI/Button/Button";
import { Field } from "../UI/Field/Field";

type Props = {
  maxValue: number;
  changeMaxValue: (value: number) => void;
  validatorForMaxValue: () => boolean;
  startValue: number;
  changeStartValue: (value: number) => void;
  validatorForStartValue: () => boolean;
  isValidated: boolean;
  isChange: boolean;
  setSettings: () => void;
};

const Settings: FC<Props> = (props) => {
  const {
    maxValue,
    changeMaxValue,
    validatorForMaxValue,
    startValue,
    changeStartValue,
    validatorForStartValue,
    isValidated,
    isChange,
    setSettings,
  } = props;

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
        <Button
          title="set"
          onClick={() => setSettings()}
          disabled={!isValidated || !isChange}
        />
      </div>
    </div>
  );
};

export { Settings };
