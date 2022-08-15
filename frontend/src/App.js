import React, { useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import WebFont from 'webfontloader'
import './App.css'
import Header from './component/layout/Header/Header'
import Footer from './component/layout/Footer/Footer'
import Home from './component/Home/Home'
function App() {
  useEffect(() => {
    WebFont.load({
      google: {
        families: ['Lato', 'Roboto'],
      },
    })
  }, [])
  return (
    <Router>
      <Header />
      <Routes>
      <Route path="/" element={<Home />} />
      </Routes>
      <Footer />
    </Router>
  )
}

export default App
