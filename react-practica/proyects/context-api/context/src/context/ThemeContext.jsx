import { createContext, useState } from "react";

const ThemeContext = createContext()
const ThemeProvider = ({ children }) => {
    const [theme, setTheme] = useState("ligth")

    const handleTheme = (e) => {
        if (e.target.value === "ligth") {
            setTheme("ligth")
        } else {
            setTheme("dark")
        }
    }
    const data = { theme, handleTheme }
    return (
        <ThemeContext.Provider value={data}>{children}</ThemeContext.Provider>
    )
}

export { ThemeProvider }
export default ThemeContext