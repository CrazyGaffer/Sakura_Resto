import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import en from '/src/config/translations/en/tsconfig.json';
import et from '/src/config/translations/et/tsconfig.json';
import ru from '/src/config/translations/ru/tsconfig.json';

const resources = {
    en: { translation: en },
    et: { translation: et },
    ru: { translation: ru }
};

i18n
    .use(initReactI18next)
    .init({
        resources,
        lng: "et", // Default language
        fallbackLng: "en",
        interpolation: { escapeValue: false }
    })
    .then(() => {
        console.log("i18n initialized");
    });

export default i18n;