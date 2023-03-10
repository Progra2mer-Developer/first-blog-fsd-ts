import React, { Suspense, useEffect } from "react";

import { useTheme } from "app/providers/ThemeProvider";

import { classNames } from "shared/helpers/classNames/classNames";
import "./styles/index.scss";

import { Navbar } from "widjets/Navbar";
import { Sidebar } from "widjets/Sidebar";
import { PageLoader } from "shared/ui/PageLoader/PageLoader";
import { AppRouter } from "./providers/router";

const App: React.FC = () => {
  const { theme } = useTheme();
  // const { t } = useTranslation('translation');

  // useEffect(() => {
  //   throw new Error();
  // }, []);
  return (
    <div className={classNames("app", {}, [theme])}>
      <Suspense fallback={<PageLoader />}>
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
