import i18n from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

import translations from 'Translations';

const defaultLang = window.navigator.language === 'zh-CN' ? 'zh_CN' : 'de_DE';

i18n.use(LanguageDetector).init({
    fallbackLng: defaultLang,
    debug: false,

    resources: translations,

    ns: ['common'],
    defaultNS: 'common',

    interpolation: {
        escapeValue: false, // not needed for react
    }
});

export default i18n;