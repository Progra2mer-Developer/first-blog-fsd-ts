import React from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/helpers/classNames/classNames';
import AppLink, { EAppLinkTheme } from 'shared/ui/AppLink/AppLink';

import s from './Navbar.module.scss';

interface INavbarProrps {
  className?: string;
}

export const Navbar = ({ className }: INavbarProrps) => {
    const { t } = useTranslation();

    return (
        <div className={classNames(s.navbar, {}, [className])}>
            <div />

            <div className={s.links}>
                <AppLink theme={EAppLinkTheme.PRIMARY} to="/" className={s.mainLink}>
                    {t('Main Page')}
                </AppLink>
                <AppLink theme={EAppLinkTheme.PRIMARY} to="/about">
                    {t('About Page')}
                </AppLink>
            </div>
        </div>
    );
};
