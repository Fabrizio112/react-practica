import { createContext, useState } from "react";

const LanguageContext = createContext()
let languages = {
    es: {
        mainTitle: "Practica de Context Api",
        headerTitle: "Mi Cabecera",
        buttonLigth: "Claro",
        buttonDark: "Oscuro"
    },
    en: {
        mainTitle: "Context Api Practise",
        headerTitle: "My Header",
        buttonLigth: "Ligth",
        buttonDark: "Dark"
    }
}
const initialLanguage = "es"
const LanguageProvider = ({ children }) => {

    const [language, setLanguage] = useState(initialLanguage)
    const [texts, setTexts] = useState(languages[language])

    const handleLanguage = (e) => {
        if (e.target.value === "es") {
            setLanguage("es")
            setTexts(languages.es)
        } else {
            setLanguage("en")
            setTexts(languages.en)
        }
    }

    const data = { handleLanguage, texts }
    return (
        <LanguageContext.Provider value={data}>{children}</LanguageContext.Provider>
    )
}

export { LanguageProvider }
export default LanguageContext