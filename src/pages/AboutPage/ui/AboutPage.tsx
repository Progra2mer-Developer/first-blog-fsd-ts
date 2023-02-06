import React from "react";
import { useTranslation } from "react-i18next";

const AboutPage: React.FC = (props) => {
  const { t } = useTranslation("aboutPage");
  return (
    <div className="aboutPage">
      <div>{t("About Page")}</div>
    </div>
  );
};

export default AboutPage;
