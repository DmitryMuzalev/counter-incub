import { FC, ChangeEvent } from "react";
import s from "./Field.module.scss";
type Props = {
  id: string;
  label: string;
  cb: (value: number) => void;
  value: number;
};

const Field: FC<Props> = ({ id, label, value, cb }) => {
  const changeValueHandler = (e: ChangeEvent<HTMLInputElement>) => {
    const value = +e.target.value;
    cb(value);
  };

  return (
    <div className={s.field}>
      <label htmlFor={id}>{`${label}:`}</label>
      <input
        id={id}
        type="number"
        onChange={changeValueHandler}
        value={value}
      />
    </div>
  );
};

export { Field };
