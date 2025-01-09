import { FC, InputHTMLAttributes } from "react";
import s from "./Field.module.scss";
type Props = InputHTMLAttributes<HTMLInputElement> & {
  id: string;
  label: string;
};

const Field: FC<Props> = ({ id, label, ...props }) => {
  return (
    <div className={s.field}>
      <label htmlFor={id}>{`${label}:`}</label>
      <input id={id} {...props} />
    </div>
  );
};

export { Field };
