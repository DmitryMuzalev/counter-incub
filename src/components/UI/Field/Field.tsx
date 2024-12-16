import { FC } from "react";
import s from "./Field.module.scss";
type Props = {
  id: string;
  label: string;
};

const Field: FC<Props> = ({ id, label }) => {
  return (
    <div className={s.field}>
      <label htmlFor={id}>{`${label}:`}</label>
      <input id={id} type="number" />
    </div>
  );
};

export { Field };
