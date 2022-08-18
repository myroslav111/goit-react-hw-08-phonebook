import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import Backend from "i18next-http-backend";
import LanguageDetector from "i18next-browser-languagedetector";

const resources = {
  en: {
    translation: {
      lang: "lang",
      phonebook: "Phonebook",
      leng: "en",
      sign_in: "Sign In",
      login: "Log In",
      password: "password...",
      name: "username...",
      names: "Name",
      email: "email...",
      delete: "delete",
      add: "Add contact",
      number: "Number",
      contacts: "Contacts",
      hello: "hai",
    },
  },
  ua: {
    translation: {
      lang: "мова",
      phonebook: "KOHTAKT",
      leng: "ua",
      sign_in: "Увійти",
      login: "Зареєструватися",
      password: "пароль...",
      name: "ім'я...",
      email: "пошта...",
      delete: "геть",
      add: "Додати",
      names: "Iм'я",
      number: "Телефон",
      contacts: "Контакти",
      hello: "привіт",
    },
  },
};

i18n

  .use(Backend)

  .use(LanguageDetector)

  .use(initReactI18next)

  .init({
    // backend: {
    //   // loadPath: "/assets/locales/{{lng}}/translation.json",
    //   // loadPath: "./assest/locales/{{lng}}/translation.json",
    //   // loadPath: "/assest/locales/{{lng}}/translation.json",
    //   // loadPath: "../../public/assest/locales/{{lng}}/translation.json",
    // },
    resources,
    supportedLngs: ["en", "ua"],

    fallbackLng: "en",
    detection: {
      order: ["localStorage", "cookie"],
      lookupLocalStorage: "i18nextLng",
      caches: ["localStorage", "cookie"],
    },
    debug: false,

    interpolation: {
      escapeValue: false, // not needed for react as it escapes by default
    },

    react: {
      wait: true,
    },
  });

export default i18n;
