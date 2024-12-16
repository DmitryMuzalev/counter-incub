import { FC } from "react";
import { Button } from "../UI/Button/Button";
import { Field } from "../UI/Field/Field";

type Props = {
  maxValue: number;
  startValue: number;
  changeMaxValue: (value: number) => void;
  changeStartValue: (value: number) => void;
};

const Settings: FC<Props> = ({
  changeMaxValue,
  changeStartValue,
  maxValue,
  startValue,
}) => {
  return (
    <div className="box">
      <div className="box__top">
        <Field
          id="maxValue"
          label="max value"
          cb={changeMaxValue}
          value={maxValue}
        />
        <Field
          id="startValue"
          label="start value"
          cb={changeStartValue}
          value={startValue}
        />
      </div>
      <div className="box__bottom">
        <Button title="set" />
      </div>
    </div>
  );
};

export { Settings };
