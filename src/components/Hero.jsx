import { TypeAnimation } from 'react-type-animation'
import { motion } from 'framer-motion'
import { Link } from 'react-scroll'
import { GitBranch, Mail, Phone, ArrowDown, Sparkles } from 'lucide-react'

export default function Hero() {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden grid-bg">
      {/* Radial glow blobs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 py-32 flex flex-col lg:flex-row items-center gap-16">
        {/* Text */}
        <motion.div
          className="flex-1 text-center lg:text-left"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          <motion.div
            className="inline-flex items-center gap-2 glass rounded-full px-4 py-2 text-sm text-cyan-400 mb-6 border border-cyan-400/30"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            <Sparkles size={14} />
            <span className="font-mono">Available for Opportunities</span>
          </motion.div>

          <h1 className="text-5xl md:text-7xl font-black mb-4 leading-tight">
            Hi, I'm <br />
            <span className="shimmer-text">Koyilada Manohar</span>
          </h1>

          <div className="text-xl md:text-2xl font-semibold text-slate-300 mb-6 h-16 flex items-center justify-center lg:justify-start">
            <TypeAnimation
              sequence={[
                'Full Stack Developer', 2000,
                'Machine Learning Enthusiast', 2000,
                'Data Science Student', 2000,
                'Problem Solver', 2000,
                'React Developer', 2000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
              className="neon-text font-mono"
            />
          </div>

          <p className="text-slate-400 text-lg leading-relaxed max-w-xl mx-auto lg:mx-0 mb-10">
            Passionate CSE student building modern apps, solving real-world problems,
            and continuously learning new technologies.
          </p>

          <div className="flex flex-wrap gap-4 justify-center lg:justify-start mb-10">
            <Link to="projects" smooth duration={600} offset={-80}>
              <button className="btn-primary">
                View Projects <ArrowDown size={16} />
              </button>
            </Link>
            <Link to="contact" smooth duration={600} offset={-80}>
              <button className="btn-outline">
                Contact Me <Mail size={16} />
              </button>
            </Link>
          </div>

          {/* Social Pills */}
          <div className="flex gap-4 justify-center lg:justify-start">
            {[
              { href: 'https://github.com/manu743-gif', icon: <GitBranch size={18} />, label: 'GitHub' },
              { href: 'mailto:koyiladamanohar11@gmail.com', icon: <Mail size={18} />, label: 'Email' },
              { href: 'tel:7013072977', icon: <Phone size={18} />, label: 'Phone' },
            ].map(s => (
              <a
                key={s.label}
                href={s.href}
                target="_blank" rel="noreferrer"
                className="flex items-center gap-2 glass px-4 py-2 rounded-full text-sm text-slate-300 hover:text-cyan-400 hover:border-cyan-400/50 transition-all duration-300 group"
              >
                <span className="group-hover:scale-110 transition-transform">{s.icon}</span>
                {s.label}
              </a>
            ))}
          </div>
        </motion.div>

        {/* Avatar / Visual */}
        <motion.div
          className="flex-shrink-0"
          initial={{ opacity: 0, scale: 0.7 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.3, ease: 'easeOut' }}
        >
          <div className="relative floating">
            {/* Outer ring */}
            <div className="w-64 h-64 md:w-80 md:h-80 rounded-full"
              style={{ background: 'conic-gradient(from 0deg, #00d4ff, #a855f7, #ec4899, #00d4ff)', padding: '3px' }}>
              <div className="w-full h-full rounded-full bg-[#020817] flex items-center justify-center">
                <div className="text-center">
                  <div className="text-6xl mb-2">👨‍💻</div>
                  <div className="font-mono text-cyan-400 text-sm font-bold">$ code --life</div>
                  <div className="font-mono text-purple-400 text-xs mt-1 opacity-80">{'> Hello World!'}</div>
                </div>
              </div>
            </div>
            {/* Orbiting dots */}
            <div className="absolute inset-0 rounded-full border border-cyan-400/20 animate-spin" style={{ animationDuration: '8s' }}>
              <div className="absolute -top-2 left-1/2 w-4 h-4 bg-cyan-400 rounded-full -translate-x-1/2 pulse-glow" />
            </div>
            <div className="absolute inset-4 rounded-full border border-purple-500/20 animate-spin" style={{ animationDuration: '12s', animationDirection: 'reverse' }}>
              <div className="absolute -bottom-2 left-1/2 w-3 h-3 bg-purple-500 rounded-full -translate-x-1/2" />
            </div>
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <span className="text-slate-500 text-xs font-mono">scroll down</span>
        <ArrowDown size={16} className="text-cyan-400" />
      </motion.div>
    </section>
  )
}
