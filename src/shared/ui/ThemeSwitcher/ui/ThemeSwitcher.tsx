import React from 'react';

import { Theme, useTheme } from 'app/providers/ThemeProvider';
import { classNames } from 'shared/helpers/classNames/classNames';

import DarkIcon from 'shared/assets/icons/theme-dark.svg';
import LightIcon from 'shared/assets/icons/theme-light.svg';
import Button, { ThemeButton } from 'shared/ui/Button/Button';
import s from './ThemeSwitcher.module.scss';

interface IThemeSwitcher {
  className?: string;
}

export const ThemeSwitcher: React.FC<IThemeSwitcher> = ({ className }) => {
    const { theme, toggleTheme } = useTheme();

    return (
        <Button
            theme={ThemeButton.CLEAR}
            onClick={toggleTheme}
            className={classNames(s.themeSwitcher, {}, [className])}
        >
            {theme === Theme.Dark ? <DarkIcon className={s.icon} /> : <LightIcon className={s.icon} />}
        </Button>
    );
};
