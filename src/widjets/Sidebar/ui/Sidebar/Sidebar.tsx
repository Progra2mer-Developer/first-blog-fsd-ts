import React, { useState } from "react";
import { classNames } from "shared/helpers/classNames/classNames";
import { ThemeSwitcher } from "shared/ui/ThemeSwitcher";

import s from "./Sidebar.module.scss";

interface ISidebarProrps {
  className?: string;
}

export const Sidebar: React.FC<ISidebarProrps> = ({ className }) => {
  const [collapsed, setCollapsed] = useState(false);
  const onToggle = () => {
    setCollapsed((prev) => !prev);
  };
  return (
    <div
      className={classNames(s.sidebar, { [s.collapsed]: collapsed }, [
        className,
      ])}
    >
        <button onClick={onToggle}>Toggle</button>

      <div className={s.switchers}>
        <ThemeSwitcher />
        {/* LanguageSwitchet */}
      </div>
    </div>
  );
};
