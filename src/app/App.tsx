import React, { Suspense } from "react";
import { Link, Route, Routes } from "react-router-dom";

import { useTheme } from "app/providers/ThemeProvider";

import { classNames } from "shared/helpers/classNames/classNames";
import "./styles/index.scss";

import { AppRouter } from "./providers/router";

const App: React.FC = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className={classNames("app", {}, [theme])}>
      <button onClick={toggleTheme}> Toggle Theme</button>
      <Link to={"/"}>Main Page</Link>
      <Link to={"/about"}>About Page</Link>
      <AppRouter />
      App container 123
    </div>
  );
};

export default App;
