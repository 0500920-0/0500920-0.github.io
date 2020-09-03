/**
 * Ref.: https://blog.usejournal.com/internationalization-with-react-hooks-af37bed9f195
 */

import React, { createContext, useState, useEffect, useContext } from 'react';

export interface TranslationsImport<T> {
    [index: string]: () => Promise<{default: T}>;
}

interface State<T> {
    lang: string;
    translation: T;
    setLang: React.Dispatch<React.SetStateAction<string>>;// (lang: string) => void;
}

export default function createTranslation<T> (
    translations: TranslationsImport<T>,
    defaultLangStr: string
) {
    const defaultLang = defaultLangStr in translations ? defaultLangStr : Object.keys(translations)[0];
    const initialState: State<T> = {
        lang: defaultLang,
        translation: {} as T,
        setLang: () => {},
    }

    const TranslationContext = createContext(initialState);

    const TranslationContextProvider: React.FC = ({ children }) => {
        const [lang, setLang] = useState(initialState.lang);
        const [translation, setTranslation] = useState(initialState.translation)

        useEffect(() => {
            (async function IIAFE () {
                if (lang in translations){
                    const fetchedTranslation = await translations[lang]();
                    setTranslation(fetchedTranslation.default);
                    document.documentElement.lang = lang; // change <html lang> attr
                }
            })();
        }, [lang, setTranslation]);

        return <TranslationContext.Provider value={{ lang, translation, setLang }}>
            {children}
        </TranslationContext.Provider>;
    }

    const useTranslation = () => useContext(TranslationContext);

    return { TranslationContext, useTranslation, TranslationContextProvider };
}