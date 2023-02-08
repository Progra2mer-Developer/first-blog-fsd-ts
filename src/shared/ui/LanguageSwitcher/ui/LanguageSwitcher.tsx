import React from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/helpers/classNames/classNames';
import Button, { ThemeButton } from 'shared/ui/Button/Button';

interface ILanguageSwitcherProps {
  className?: string;
}

export const LanguageSwitcher: React.FC<ILanguageSwitcherProps> = ({
    className,
}) => {
    const { t, i18n } = useTranslation();
    const toggleLanguage = () => {
        i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru');
    };
    return (
        <Button
            theme={ThemeButton.CLEAR}
            onClick={toggleLanguage}
            className={classNames('', {}, [className])}
        >
            {t('Language')}
        </Button>
    );
};
