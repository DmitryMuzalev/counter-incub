import { Button } from "../UI/Button/Button";

const Counter = () => {
  return (
    <div className="box">
      <div className="box__top">Display</div>
      <div className="box__bottom">
        <Button title="inc" />
        <Button title="reset" disabled />
      </div>
    </div>
  );
};

export { Counter };
