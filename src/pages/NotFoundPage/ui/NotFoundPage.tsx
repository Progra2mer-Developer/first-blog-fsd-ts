import React from "react";
import { useTranslation } from "react-i18next";

interface INotFoundPageProps {}
import s from "./NotFoundPage.module.scss";

export const NotFoundPage: React.FC<INotFoundPageProps> = (props) => {
  const { t } = useTranslation();
  return (
    <div className={s.notFoundPage}>
      <div>{t("Not Found Page")}</div>
    </div>
  );
};
