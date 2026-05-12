import { useState, useEffect } from 'react'
import { Link } from 'react-scroll'
import { Menu, X, Code2, Sun, Moon } from 'lucide-react'

const navLinks = [
  { to: 'hero', label: 'Home' },
  { to: 'about', label: 'About' },
  { to: 'skills', label: 'Skills' },
  { to: 'projects', label: 'Projects' },
  { to: 'internships', label: 'Internships' },
  { to: 'github', label: 'GitHub' },
  { to: 'contact', label: 'Contact' },
]

export default function Navbar({ darkMode, setDarkMode }) {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'scrolled' : ''}`}
      style={{ background: scrolled ? undefined : 'transparent' }}>
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link to="hero" smooth duration={600} className="flex items-center gap-2 cursor-pointer group">
          <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-cyan-400 to-purple-500 flex items-center justify-center group-hover:scale-110 transition-transform">
            <Code2 size={18} className="text-white" />
          </div>
          <span className="font-bold text-xl neon-text font-mono">KM</span>
        </Link>

        {/* Desktop Links */}
        <ul className="hidden md:flex items-center gap-1">
          {navLinks.map(link => (
            <li key={link.to}>
              <Link
                to={link.to} smooth duration={600} spy offset={-80}
                activeClass="text-cyan-400"
                className="px-4 py-2 rounded-lg text-sm font-medium text-slate-300 hover:text-cyan-400 hover:bg-white/5 cursor-pointer transition-all duration-200"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Actions */}
        <div className="flex items-center gap-3">
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="p-2 rounded-lg border border-white/10 hover:border-cyan-400/50 text-slate-300 hover:text-cyan-400 transition-all duration-200"
            aria-label="Toggle theme"
          >
            {darkMode ? <Sun size={18} /> : <Moon size={18} />}
          </button>
          <a href="#contact" className="hidden md:inline-flex btn-primary text-sm py-2 px-5">
            Hire Me
          </a>
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden p-2 rounded-lg border border-white/10 text-slate-300 hover:text-cyan-400 transition-all"
            aria-label="Menu"
          >
            {menuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden glass border-t border-white/10 px-6 pb-6 pt-2">
          {navLinks.map(link => (
            <Link
              key={link.to}
              to={link.to} smooth duration={600} offset={-80}
              onClick={() => setMenuOpen(false)}
              className="block py-3 text-slate-300 hover:text-cyan-400 cursor-pointer border-b border-white/5 last:border-0 transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </div>
      )}
    </nav>
  )
}
