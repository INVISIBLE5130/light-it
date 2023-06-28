import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import I18NextHttpBackend from "i18next-http-backend";
import LanguageDetector from "i18next-browser-languagedetector";

i18n
  .use(I18NextHttpBackend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    lng: "en",
    debug: true,
    fallbackLng: "en",
    detection: {
      order: ["queryString", "cookie"],
    },
    interpolation: {
      escapeValue: false,
    },
    supportedLngs: ["en", "he"], // Add more languages as needed
  });

export default i18n;
