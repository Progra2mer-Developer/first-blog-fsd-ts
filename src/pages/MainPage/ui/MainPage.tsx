import { BugButton } from "app/providers/ErrorBoundry";
import React from "react";
import { useTranslation } from "react-i18next";

const MainPAge: React.FC = (props) => {
  const { t } = useTranslation("mainPage");
  return (
    <div className="mainPage">
      <div>{t("Main Page")}</div>
      <BugButton />
    </div>
  );
};

export default MainPAge;
