import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

const languages = ['es', 'en']
let first = 0;

const LanguageSelector = () => {

    const { t, i18n } = useTranslation()

    const changeLanguageHandler = (lang) => {
        localStorage.setItem('i18nextLng', language);
        i18n.changeLanguage(lang)
    }
    const changeHolaText = () => {
        if (first > 1) {
            let hola = document.querySelector('.typing-animation-hola');
            if (hola) hola.innerHTML = t('header.holaSoy');
        }
        first++;
    }

    const getLangFromI18 = () => {
        let lang = i18n.language;
        if (lang && lang.includes('-')) lang = lang.split('-')[0];
        return languages.includes(lang) ? lang : 'es';
    }

    const initialLang = languages.includes(localStorage.getItem('i18nextLng')) ? localStorage.getItem('i18nextLng') : getLangFromI18();

    const [language, setLanguage] = useState(initialLang);

    useEffect(() => {
        changeLanguageHandler(language);
        changeHolaText();
    }, [language]);


    return (
        <div className="self-end flex flex-row-reverse">
            <div className="flex flex-row gap-2">
                {languages.map((lang) => {
                    return (
                        (lang == language)
                            ? <button className="rounded-xl border p-2 shadow-xl rounded-lg sm:btn-sm hover:scale-105 border-mid-transparent bg-mid-hard-transparent uppercase px-2 py-1" onClick={() => setLanguage(lang)}>{lang}</button>
                            : <button className="rounded-xl rounded-lg sm:btn-sm hover:scale-105 uppercase px-2 py-1" onClick={() => setLanguage(lang)}>{lang}</button>
                    )
                })}
            </div>
        </div>
    )
}

export default LanguageSelector;