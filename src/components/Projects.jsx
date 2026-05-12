import { motion } from 'framer-motion'
import { useState } from 'react'
import { GitBranch, ExternalLink, Search } from 'lucide-react'

const projects = [
  {
    id: 1,
    title: 'Attendance Tracker',
    desc: 'Real-time student attendance management system with Firebase backend, authentication and analytics dashboard.',
    tags: ['React', 'Firebase', 'Tailwind CSS'],
    emoji: '📋',
    category: 'Full Stack',
    repo: 'Attendance_tracker',
    color: 'from-cyan-500 to-blue-600',
  },
  {
    id: 2,
    title: 'Stock Price Prediction UI',
    desc: 'Interactive dashboard for visualizing stock price predictions using ML models with real-time chart updates.',
    tags: ['Python', 'React', 'Machine Learning'],
    emoji: '📈',
    category: 'ML / Data Science',
    repo: 'stock-price-prediction-UI',
    color: 'from-green-400 to-cyan-500',
  },
  {
    id: 3,
    title: 'Ecommerce Site',
    desc: 'Full-featured e-commerce platform with product listings, cart, checkout flow and Firebase database integration.',
    tags: ['React', 'Firebase', 'CSS'],
    emoji: '🛒',
    category: 'Full Stack',
    repo: 'Ecommerce-site',
    color: 'from-purple-500 to-pink-500',
  },
  {
    id: 4,
    title: 'AI Tools Analysis',
    desc: 'Comprehensive analysis and comparison of popular AI tools with visualizations and performance benchmarks.',
    tags: ['Python', 'Data Science', 'React'],
    emoji: '🤖',
    category: 'ML / Data Science',
    repo: 'AI-tools-analysis',
    color: 'from-orange-400 to-red-500',
  },
  {
    id: 5,
    title: 'Flight Ticket Booking',
    desc: 'Modern flight booking application with search, filtering, seat selection and booking confirmation flow.',
    tags: ['React', 'JavaScript', 'Firebase'],
    emoji: '✈️',
    category: 'Full Stack',
    repo: 'flight-ticket-booking',
    color: 'from-blue-400 to-indigo-600',
  },
  {
    id: 6,
    title: 'Neon Snake Game',
    desc: 'Retro-futuristic neon-styled snake game built with HTML Canvas, featuring particle effects and high-score tracking.',
    tags: ['JavaScript', 'HTML Canvas', 'CSS'],
    emoji: '🐍',
    category: 'Game Dev',
    repo: 'neon-snake-game',
    color: 'from-lime-400 to-green-500',
  },
  {
    id: 7,
    title: 'Portfolio Website',
    desc: 'This very portfolio — built with React, Tailwind CSS and Framer Motion featuring glassmorphism and particle effects.',
    tags: ['React', 'Tailwind CSS', 'Framer Motion'],
    emoji: '🌐',
    category: 'Full Stack',
    repo: 'Portfolio',
    color: 'from-violet-500 to-purple-600',
  },
  {
    id: 8,
    title: 'Basic Python Codes',
    desc: 'Collection of Python programs covering data structures, algorithms, OOP concepts and problem-solving exercises.',
    tags: ['Python'],
    emoji: '🐍',
    category: 'Scripting',
    repo: 'manu743-gif',
    color: 'from-yellow-400 to-orange-400',
  },
]

const categories = ['All', 'Full Stack', 'ML / Data Science', 'Game Dev', 'Scripting']

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6, delay, ease: 'easeOut' },
})

export default function Projects() {
  const [filter, setFilter] = useState('All')
  const [search, setSearch] = useState('')

  const visible = projects.filter(p =>
    (filter === 'All' || p.category === filter) &&
    (p.title.toLowerCase().includes(search.toLowerCase()) || p.desc.toLowerCase().includes(search.toLowerCase()))
  )

  return (
    <section id="projects" className="py-28 px-6 bg-white/[0.01]">
      <div className="max-w-7xl mx-auto">
        <motion.p className="text-center font-mono text-cyan-400 text-sm mb-2" {...fadeUp(0)}>
          {'// my work'}
        </motion.p>
        <motion.h2 className="section-title neon-text" {...fadeUp(0.1)}>Featured Projects</motion.h2>
        <motion.p className="section-subtitle" {...fadeUp(0.15)}>
          Things I've built with passion and purpose
        </motion.p>

        {/* Search + Filter */}
        <motion.div className="flex flex-col sm:flex-row gap-4 mb-10 justify-between items-center" {...fadeUp(0.2)}>
          <div className="flex flex-wrap gap-2">
            {categories.map(c => (
              <button
                key={c}
                onClick={() => setFilter(c)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                  filter === c
                    ? 'bg-gradient-to-r from-cyan-500 to-purple-500 text-white'
                    : 'glass text-slate-400 hover:text-cyan-400'
                }`}
              >
                {c}
              </button>
            ))}
          </div>
          <div className="relative">
            <Search size={15} className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
            <input
              value={search}
              onChange={e => setSearch(e.target.value)}
              placeholder="Search projects…"
              className="glass pl-9 pr-4 py-2 rounded-full text-sm text-slate-300 placeholder-slate-500 outline-none focus:border-cyan-400/50 w-52"
            />
          </div>
        </motion.div>

        {/* Cards Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {visible.map((p, i) => (
            <motion.div
              key={p.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.07 }}
              whileHover={{ y: -8, scale: 1.02 }}
              className="glass rounded-2xl p-6 flex flex-col group cursor-pointer"
              style={{ transition: 'box-shadow 0.3s ease' }}
              onMouseEnter={e => e.currentTarget.style.boxShadow = '0 20px 60px rgba(0,212,255,0.15)'}
              onMouseLeave={e => e.currentTarget.style.boxShadow = 'none'}
            >
              {/* Header */}
              <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${p.color} flex items-center justify-center text-2xl mb-4 group-hover:scale-110 transition-transform`}>
                {p.emoji}
              </div>
              <span className="text-xs font-mono text-slate-500 mb-2">{p.category}</span>
              <h3 className="font-bold text-base mb-2 group-hover:text-cyan-400 transition-colors">{p.title}</h3>
              <p className="text-slate-400 text-sm leading-relaxed flex-1 mb-4">{p.desc}</p>

              {/* Tags */}
              <div className="flex flex-wrap gap-1.5 mb-4">
                {p.tags.map(t => (
                  <span key={t} className="tag text-xs">{t}</span>
                ))}
              </div>

              {/* GitHub Button */}
              <a
                href={`https://github.com/manu743-gif/${p.repo}`}
                target="_blank" rel="noreferrer"
                className="flex items-center justify-center gap-2 py-2 px-4 rounded-xl border border-white/10 hover:border-cyan-400/50 hover:text-cyan-400 text-slate-400 text-sm font-medium transition-all duration-200 group/btn"
              >
                <GitBranch size={15} className="group-hover/btn:rotate-12 transition-transform" />
                View on GitHub
                <ExternalLink size={12} />
              </a>
            </motion.div>
          ))}
        </div>

        {visible.length === 0 && (
          <div className="text-center py-20 text-slate-500">
            <span className="text-4xl">🔍</span>
            <p className="mt-3 font-mono">No projects found for "{search}"</p>
          </div>
        )}
      </div>
    </section>
  )
}
