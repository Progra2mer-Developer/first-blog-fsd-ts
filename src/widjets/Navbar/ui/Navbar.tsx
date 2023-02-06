import React from "react";
import { classNames } from "shared/helpers/classNames/classNames";
import AppLink, { EAppLinkTheme } from "shared/ui/AppLink/AppLink";

import s from "./Navbar.module.scss";

interface INavbarProrps {
  className?: string;
}

export const Navbar = ({ className }: INavbarProrps) => {
  return (
    <div className={classNames(s.navbar, {}, [className])}>
      <div></div>

      <div className={s.links}>
        <AppLink theme={EAppLinkTheme.PRIMARY} to={"/"} className={s.mainLink}>
          Main Page
        </AppLink>
        <AppLink theme={EAppLinkTheme.PRIMARY} to={"/about"}>
          About Page
        </AppLink>
      </div>
    </div>
  );
};
