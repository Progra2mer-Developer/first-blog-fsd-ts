import React from "react";

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
      <Navbar />
      <div className="contentPage">
        <Sidebar />
        <AppRouter />
      </div>
    </div>
  );
};

export default App;
