import React, { ButtonHTMLAttributes } from "react";
import { classNames } from "shared/helpers/classNames/classNames";

import s from "./Button.module.scss";

interface IButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  theme?: ThemeButton;
}

export enum ThemeButton {
  CLEAR = "clear",
}

const Button: React.FC<IButtonProps> = (props) => {
  const { className, children, theme, ...otherProps } = props;
  return (
    <button
      className={classNames(s.button, { [s[theme]]: true }, [className])}
      {...otherProps}
    >
      {children}
    </button>
  );
};

export default Button;
