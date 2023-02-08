import React, { Suspense } from 'react';
import { useTranslation } from 'react-i18next';

import { useTheme } from 'app/providers/ThemeProvider';

import { classNames } from 'shared/helpers/classNames/classNames';
import './styles/index.scss';

import { Navbar } from 'widjets/Navbar';
import { Sidebar } from 'widjets/Sidebar';
import { AppRouter } from './providers/router';

const App: React.FC = () => {
    const { theme } = useTheme();
    // const { t } = useTranslation('translation');
    return (
        <div className={classNames('app', {}, [theme])}>
            <Suspense fallback={(
                <div>
                    Loading
                    ...
                </div>
            )}
            >
                <Navbar />

                <div className="contentPage">
                    <Sidebar />
                    <AppRouter />
                </div>
            </Suspense>
        </div>
    );
};

export default App;
