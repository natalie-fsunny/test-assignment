import i18next from "i18next";
import { initReactI18next } from "react-i18next";
import en from "./locales/en.json"

i18next
  .use(initReactI18next)
  .init({
    fallbackLng: "en",
    lng: "en",
    supportedLngs: ["en"],
    resources: {en}
    
  });

export default i18next;
