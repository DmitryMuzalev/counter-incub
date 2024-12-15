import { Button } from "../UI/Button/Button";

const Settings = () => {
  return (
    <div className="box">
      <div className="box__top">
        <label htmlFor="maxValue">
          max value:
          <input id="maxValue" type="number" />
        </label>
        <label htmlFor="startValue">
          start value:
          <input id="startValue" type="number" />
        </label>
      </div>
      <div className="box__bottom">
        <Button title="set" />
      </div>
    </div>
  );
};

export { Settings };
