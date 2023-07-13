import { useContext } from "react";
import ThemeContext from "../context/ThemeContext";
import LanguageContext from "../context/LanguageContext";

function Main() {
    const { theme } = useContext(ThemeContext)
    const { texts } = useContext(LanguageContext)
    return (
        <main className={theme}>
            <h1>{texts.mainTitle}</h1>
        </main>
    );
}

export default Main;