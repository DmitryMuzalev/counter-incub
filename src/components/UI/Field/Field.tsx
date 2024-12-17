import { FC, ChangeEvent } from "react";
import s from "./Field.module.scss";
type Props = {
  id: string;
  label: string;
  changeValue: (value: number) => void;
  value: number;
  validator: () => boolean;
};

const Field: FC<Props> = ({ id, label, value, changeValue, validator }) => {
  const changeValueHandler = (e: ChangeEvent<HTMLInputElement>) => {
    const value = +e.target.value;
    changeValue(value);
  };

  return (
    <div className={s.field}>
      <label htmlFor={id}>{`${label}:`}</label>
      <input
        id={id}
        type="number"
        onChange={changeValueHandler}
        value={value}
        className={s.error}
      />
    </div>
  );
};

export { Field };
