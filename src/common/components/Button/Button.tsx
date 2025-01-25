import { ButtonHTMLAttributes, FC } from "react";
import s from "./Button.module.scss";

export type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement>;

const Button: FC<ButtonProps> = ({ title, ...props }) => {
  return (
    <button className={s.button} {...props}>
      {title}
    </button>
  );
};

export { Button };
