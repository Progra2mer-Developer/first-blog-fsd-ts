import React from "react";

import { Theme, useTheme } from "app/providers/ThemeProvider";
import { classNames } from "shared/helpers/classNames/classNames";
interface IThemeSwitcher {
  className?: string;
}

import DarkIcon from "shared/assets/icons/theme-dark.svg";
import LightIcon from "shared/assets/icons/theme-light.svg";
import s from "./ThemeSwitcher.module.scss";
import Button, { ThemeButton } from "shared/ui/Button/Button";

export const ThemeSwitcher: React.FC<IThemeSwitcher> = ({ className }) => {
  const { theme, toggleTheme } = useTheme();

  return (
    <Button
      theme={ThemeButton.CLEAR  }
      onClick={toggleTheme}
      className={classNames(s.themeSwitcher, {}, [className])}
    >
      {theme === Theme.Dark ? <DarkIcon className={s.icon} /> : <LightIcon className={s.icon} />}
    </Button>
  );
};
