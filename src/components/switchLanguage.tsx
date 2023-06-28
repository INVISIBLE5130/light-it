import React, { FC } from "react";
import { useTranslation } from "react-i18next";
import store from "../store/store";

interface LanguageSwitchProps {
  languages: string[];
}

const LanguageSwitch: FC<LanguageSwitchProps> = ({ languages }) => {
  const { i18n } = useTranslation();

  const handleLanguageChange = (language: string) => {
    i18n.changeLanguage(language);
    store.setLanguage(language);
  };

  return (
    <div className="flex justify-center my-4 absolute top-5 right-5">
      {languages.map((language) => (
        <button
          key={language}
          className="mx-2 py-2 px-4 rounded bg-blue-500 text-white hover:bg-blue-600"
          onClick={() => handleLanguageChange(language)}
        >
          {language}
        </button>
      ))}
    </div>
  );
};

export default LanguageSwitch;
