import React from 'react'
import Hero from './components/Hero'
import HEader from './components/HEader'
import About from './components/About'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Skills from './components/Skills'
import Footer from './components/Footer'

const App = () => {
  return (
    <>
      <HEader />
      <main>
        <section id="hero"><Hero /></section>
        <section id="about"><About /></section>
        <section id="projects"><Projects /></section>
        <section id="skills"><Skills /></section>
        <section id="contact"><Contact /></section>
      </main>
      <Footer />
    </>
  )
}

export default App