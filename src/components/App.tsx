import React, { Suspense, useContext, useState } from "react";
import { Link, Route, Routes } from "react-router-dom";

import { MainPageAsync } from "../pages/MainPage/MainPage.async";
import { AboutPageAsync } from "../pages/AboutPage/AboutPage.async";

import { Theme, ThemeContex, ThemeContextProsps } from "../theme/ThemeContext";

import { useTheme } from "../theme/useTmeme";
import { classNames } from "../helpers/classNames/classNames";

import "../styles/index.scss";

const App: React.FC = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className={classNames("app", [theme])}>
      <button onClick={toggleTheme}> Toggle Theme</button>
      <Link to={"/"}>Main Page</Link>
      <Link to={"/about"}>About Page</Link>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path={"/"} element={<MainPageAsync />} />
          <Route path={"/about"} element={<AboutPageAsync />} />
        </Routes>
      </Suspense>
      App container 123
    </div>
  );
};

export default App;
