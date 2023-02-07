import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/helpers/classNames/classNames';
import Button from 'shared/ui/Button/Button';
import { LanguageSwitcher } from 'shared/ui/LanguageSwitcher';
import { ThemeSwitcher } from 'shared/ui/ThemeSwitcher';

import s from './Sidebar.module.scss';

interface ISidebarProrps {
  className?: string;
}

export const Sidebar: React.FC<ISidebarProrps> = ({ className }) => {
    const { t } = useTranslation();

    const [collapsed, setCollapsed] = useState(false);
    const onToggle = () => {
        setCollapsed((prev) => !prev);
    };
    return (
        <div
            className={classNames(s.sidebar, { [s.collapsed]: collapsed }, [
                className,
            ])}
        >
            <Button onClick={onToggle}>{t('Toggle')}</Button>

            <div className={s.switchers}>
                <ThemeSwitcher />
                <LanguageSwitcher className={s.lang} />
            </div>
        </div>
    );
};
