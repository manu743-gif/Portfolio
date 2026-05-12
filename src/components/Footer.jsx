import { GitBranch, Mail, Heart, Code2 } from 'lucide-react'
import { Link } from 'react-scroll'

const navLinks = ['Hero', 'About', 'Skills', 'Projects', 'Internships', 'GitHub', 'Contact']

export default function Footer() {
  return (
    <footer className="relative border-t border-white/5 pt-16 pb-8 px-6 bg-black/20">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-3 gap-10 mb-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-cyan-400 to-purple-500 flex items-center justify-center">
                <Code2 size={18} className="text-white" />
              </div>
              <span className="font-bold text-xl neon-text font-mono">KM</span>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed max-w-xs">
              Full Stack Developer & ML Enthusiast building modern,
              scalable applications with passion and precision.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="font-semibold text-sm mb-4 text-slate-300 font-mono">Quick Links</h4>
            <div className="grid grid-cols-2 gap-2">
              {navLinks.map(l => (
                <Link
                  key={l}
                  to={l.toLowerCase()}
                  smooth duration={600}
                  offset={-80}
                  className="text-slate-400 hover:text-cyan-400 text-sm cursor-pointer transition-colors"
                >
                  {l}
                </Link>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold text-sm mb-4 text-slate-300 font-mono">Connect</h4>
            <div className="space-y-3">
              <a href="mailto:koyiladamanohar11@gmail.com" className="flex items-center gap-2 text-slate-400 hover:text-cyan-400 text-sm transition-colors">
                <Mail size={15} /> koyiladamanohar11@gmail.com
              </a>
              <a href="https://github.com/manu743-gif" target="_blank" rel="noreferrer" className="flex items-center gap-2 text-slate-400 hover:text-cyan-400 text-sm transition-colors">
                <GitBranch size={15} /> github.com/manu743-gif
              </a>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="h-px bg-gradient-to-r from-transparent via-cyan-500/30 to-transparent mb-8" />

        {/* Bottom */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-slate-500 text-sm flex items-center gap-1.5">
            Designed &amp; Developed with <Heart size={13} className="text-pink-400 fill-pink-400" /> by
            <span className="neon-text font-semibold ml-1">Koyilada Manohar</span>
          </p>
          <p className="text-slate-600 text-xs font-mono">© {new Date().getFullYear()} All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
