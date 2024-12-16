import { Button } from "../UI/Button/Button";

const Counter = () => {
  return (
    <div className="box">
      <div className="box__top">
        <span className="counter-value">5</span>
      </div>
      <div className="box__bottom">
        <Button title="inc" />
        <Button title="reset" disabled />
      </div>
    </div>
  );
};

export { Counter };
