import { useContext } from "react";
import ThemeContext from "../context/ThemeContext";
import LanguageContext from "../context/LanguageContext";

function Header() {
    const { theme, handleTheme } = useContext(ThemeContext)
    const { texts, handleLanguage } = useContext(LanguageContext)
    return (
        <header className={theme}>
            <h2> {texts.headerTitle}</h2>
            <input type="radio" id="ligth" name="radio-btn" value="ligth" onClick={handleTheme} />
            <label htmlFor="ligth">{texts.buttonLigth}</label>
            <input type="radio" id="dark" name="radio-btn" value="dark" onClick={handleTheme} />
            <label htmlFor="dark">{texts.buttonDark}</label>
            <select name="language" id="language" onChange={handleLanguage}>
                <option value="">----</option>
                <option value="es" >ES</option>
                <option value="en" >EN</option>
            </select>
        </header>
    );
}

export default Header;

