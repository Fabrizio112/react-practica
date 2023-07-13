import { useState } from 'react'
import Main from './Components/Main'
import Header from './Components/Header'
import ThemeContext, { ThemeProvider } from './context/ThemeContext'
import "./assets/app.css"
import { LanguageProvider } from './context/LanguageContext'
import CrudApi from './Components/CrudApi'

function App() {


  return (
    <>
      <ThemeProvider>
        <LanguageProvider>
          <Main />
          <Header />
        </LanguageProvider>
      </ThemeProvider>
      <CrudApi />
    </>
  )
}

export default App
