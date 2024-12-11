import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import { Router } from './routes/Router'
import Footer from './components/Footer.jsx'

function App() {


  return (
    <BrowserRouter>
      <Router />
      <Footer/>

    </BrowserRouter>
  )
}

export default App
