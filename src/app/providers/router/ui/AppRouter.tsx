import React, { Suspense } from 'react';

import { Route, Routes } from 'react-router-dom';
import { routeConfig } from 'shared/config/routesConfig/routesConfig';
import { PageLoader } from 'shared/ui/PageLoader/PageLoader';

const AppRouter: React.FC = () => (
    <Suspense fallback={<PageLoader />}>
        <Routes>
            {Object.values(routeConfig).map(({ element, path }) => (
                <Route
                    path={path}
                    element={<div className="pageWrapper">{element}</div>}
                    key={path}
                />
            ))}
        </Routes>
    </Suspense>
);
export default AppRouter;
