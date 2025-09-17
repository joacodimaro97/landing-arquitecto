import React from 'react'
import { motion } from 'framer-motion'
import Header from './components/Header'
import Hero from './sections/Hero'
import Portfolio from './sections/Portfolio'
import Services from './sections/Services'
import About from './sections/About'
import Contact from './sections/Contact'
import Footer from './components/Footer'

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <Hero />
        <Portfolio />
        <Services />
        <About />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

export default App
