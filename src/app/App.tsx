import React, { Suspense } from "react";
import { useTranslation } from "react-i18next";

import { useTheme } from "app/providers/ThemeProvider";

import { classNames } from "shared/helpers/classNames/classNames";
import "./styles/index.scss";

import { AppRouter } from "./providers/router";
import { Navbar } from "widjets/Navbar";
import { Sidebar } from "widjets/Sidebar";


const App: React.FC = () => {
  const { theme } = useTheme();
  return (
    <div className={classNames("app", {}, [theme])}>
      <Suspense fallback={<div>Loading...</div>}>
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
