import { useState } from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Futbol from './Pages/Futbol'
import FutbolDetalle from './Pages/FutbolDetalle'
import CrudApi from './Components/CrudApi'

function App() {

  return (
    <>
      <CrudApi />
    </>
  )
}

export default App
