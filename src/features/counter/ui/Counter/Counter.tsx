import { FC } from "react";
import { Display } from "./Display/Display";
import { Settings } from "./Settings/Settings";

const Counter: FC = () => {
  return (
    <div className="counter">
      <Settings />
      <Display />
    </div>
  );
};

export { Counter };
