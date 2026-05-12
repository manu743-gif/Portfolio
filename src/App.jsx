import { useState, useEffect } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Internships from './components/Internships'
import GitHub from './components/GitHub'
import Contact from './components/Contact'
import Footer from './components/Footer'
import ParticleBackground from './components/ParticleBackground'
import ScrollToTop from './components/ScrollToTop'

export default function App() {
  const [darkMode, setDarkMode] = useState(true)

  useEffect(() => {
    document.body.className = darkMode ? '' : 'light'
  }, [darkMode])

  return (
    <div className={`relative min-h-screen ${darkMode ? 'bg-[#020817] text-slate-100' : 'bg-[#f0f4ff] text-slate-900'}`}>
      <ParticleBackground darkMode={darkMode} />
      <div className="relative z-10">
        <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Internships />
        <GitHub />
        <Contact />
        <Footer />
      </div>
      <ScrollToTop />
    </div>
  )
}
