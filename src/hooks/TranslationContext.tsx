import createTranslation from './createTranslation';

const { TranslationContext, TranslationContextProvider, useTranslation } = createTranslation({
    'zh-TW': () => import('./zh-TW'),
    'yue-HK': () => import('./yue-HK'),
    'en-US': () => import('./en-US'),
}, navigator.language);

export const supportedLanguageList: Record<string, string> = {
    'zh-TW': '繁體中文',
    'yue-HK': '廣東話',
    'en-US': 'English',
}

export { TranslationContext, TranslationContextProvider, useTranslation };