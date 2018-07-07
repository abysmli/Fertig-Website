import i18n from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

import translations from 'Translations';

i18n.use(LanguageDetector).init({
    fallbackLng: 'de_DE',
    debug: false,

    resources: translations,

    ns: ['common'],
    defaultNS: 'common',

    interpolation: {
        escapeValue: false, // not needed for react
    }
});

export default i18n;