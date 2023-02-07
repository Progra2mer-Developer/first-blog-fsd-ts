import React from "react";
import { Link, LinkProps } from "react-router-dom";
import { classNames } from "shared/helpers/classNames/classNames";
import s from "./AppLink.module.scss";

export enum EAppLinkTheme {
  PRIMARY = "primary",
  SECONDARY = "secondary",
  RED = "red",
}

interface IAppLink extends LinkProps {
  clasclassNameNm?: string;
  theme?: EAppLinkTheme;
}

const AppLink: React.FC<IAppLink> = (props) => {
  const {
    to,
    className,
    children,
    theme = EAppLinkTheme.PRIMARY,
    ...otherProps
  } = props;
  return (
    <Link
      to={to}
      className={classNames(s.appLink, { [s[theme]]: true }, [className])}
      {...otherProps}
    >
      {children}
    </Link>
  );
};

export default AppLink;
