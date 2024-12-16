import { Button } from "../UI/Button/Button";
import { Field } from "../UI/Field/Field";

const Settings = () => {
  return (
    <div className="box">
      <div className="box__top">
        <Field id="maxValue" label="max value" />
        <Field id="startValue" label="start value" />
      </div>
      <div className="box__bottom">
        <Button title="set" />
      </div>
    </div>
  );
};

export { Settings };
