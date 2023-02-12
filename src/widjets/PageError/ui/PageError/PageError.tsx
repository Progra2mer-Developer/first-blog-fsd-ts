import React from 'react';
import { useTranslation } from 'react-i18next';
import Button from 'shared/ui/Button/Button';

interface IPageErrorProps {}


import s from "./PageError.module.scss"
const PageError: React.FC<IPageErrorProps> = () => {
    const { t } = useTranslation();

    const reloadPage = () => {
    // eslint-disable-next-line no-restricted-globals
        location.reload();
    };
    return (
        <div className="pageError">
            <p>{t('An unforeseen mistake occurred')}</p>
            <Button onClick={reloadPage}>{t('Refresh the page')}</Button>
        </div>
    );
};

export default PageError;
