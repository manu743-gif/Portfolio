import { motion } from 'framer-motion'
import { GitBranch, Star, GitFork, Eye, ExternalLink, Code2 } from 'lucide-react'

const repos = [
  { name: 'Attendance_tracker', desc: 'Real-time attendance management system with Firebase', lang: 'JavaScript', stars: 5, forks: 2, color: 'from-cyan-500 to-blue-500', emoji: '📋' },
  { name: 'stock-price-prediction-UI', desc: 'ML-powered stock price prediction dashboard', lang: 'Python', stars: 8, forks: 3, color: 'from-green-400 to-cyan-500', emoji: '📈' },
  { name: 'Ecommerce-site', desc: 'Full-featured ecommerce platform with Firebase', lang: 'React', stars: 6, forks: 1, color: 'from-purple-500 to-pink-500', emoji: '🛒' },
  { name: 'AI-tools-analysis', desc: 'Analysis and comparison of AI tools', lang: 'Python', stars: 4, forks: 1, color: 'from-orange-400 to-red-500', emoji: '🤖' },
  { name: 'flight-ticket-booking', desc: 'Modern flight booking application', lang: 'React', stars: 7, forks: 2, color: 'from-blue-400 to-indigo-600', emoji: '✈️' },
  { name: 'neon-snake-game', desc: 'Retro-futuristic neon snake game', lang: 'JavaScript', stars: 12, forks: 4, color: 'from-lime-400 to-green-500', emoji: '🐍' },
  { name: 'Portfolio', desc: 'Personal portfolio built with React & Tailwind', lang: 'React', stars: 9, forks: 2, color: 'from-violet-500 to-purple-600', emoji: '🌐' },
]

const githubStats = [
  { label: 'Repositories', value: '10+', icon: <Code2 size={20} /> },
  { label: 'Total Stars', value: '51', icon: <Star size={20} /> },
  { label: 'Contributions', value: '200+', icon: <GitBranch size={20} /> },
  { label: 'Followers', value: '5+', icon: <Eye size={20} /> },
]

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6, delay, ease: 'easeOut' },
})

export default function GitHub() {
  return (
    <section id="github" className="py-28 px-6 bg-white/[0.01]">
      <div className="max-w-7xl mx-auto">
        <motion.p className="text-center font-mono text-cyan-400 text-sm mb-2" {...fadeUp(0)}>
          {'// open source'}
        </motion.p>
        <motion.h2 className="section-title neon-text" {...fadeUp(0.1)}>GitHub Showcase</motion.h2>
        <motion.p className="section-subtitle" {...fadeUp(0.15)}>
          My open source work and contributions
        </motion.p>

        {/* Profile Card */}
        <motion.div {...fadeUp(0.2)} className="glass rounded-2xl p-6 mb-10 flex flex-col md:flex-row items-center gap-6 neon-border">
          <div className="w-20 h-20 rounded-full bg-gradient-to-br from-cyan-500 to-purple-500 flex items-center justify-center text-4xl flex-shrink-0">
            👨‍💻
          </div>
          <div className="flex-1 text-center md:text-left">
            <h3 className="text-xl font-bold mb-1">manu743-gif</h3>
            <p className="text-slate-400 text-sm mb-3">Full Stack Developer · ML Enthusiast · Open Source Contributor</p>
            <div className="flex flex-wrap gap-2 justify-center md:justify-start">
              {['Python', 'React', 'JavaScript', 'Machine Learning', 'Firebase'].map(t => (
                <span key={t} className="tag">{t}</span>
              ))}
            </div>
          </div>
          <a
            href="https://github.com/manu743-gif"
            target="_blank" rel="noreferrer"
            className="btn-primary flex-shrink-0"
          >
            <GitBranch size={16} /> View Profile
          </a>
        </motion.div>

        {/* Stats */}
        <motion.div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10" {...fadeUp(0.25)}>
          {githubStats.map((s, i) => (
            <motion.div
              key={s.label}
              className="glass rounded-xl p-5 text-center card-hover"
              whileHover={{ scale: 1.05 }}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 * i }}
            >
              <div className="text-cyan-400 flex justify-center mb-2">{s.icon}</div>
              <div className="text-2xl font-black neon-text mb-1">{s.value}</div>
              <div className="text-slate-500 text-xs">{s.label}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* Repo Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {repos.map((repo, i) => (
            <motion.div
              key={repo.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              whileHover={{ y: -5 }}
              className="glass rounded-xl p-5 group"
            >
              <div className="flex items-start justify-between mb-3">
                <div className={`w-10 h-10 rounded-lg bg-gradient-to-br ${repo.color} flex items-center justify-center text-lg`}>
                  {repo.emoji}
                </div>
                <a
                  href={`https://github.com/manu743-gif/${repo.name}`}
                  target="_blank" rel="noreferrer"
                  className="text-slate-500 hover:text-cyan-400 transition-colors"
                >
                  <ExternalLink size={16} />
                </a>
              </div>
              <h3 className="font-mono font-bold text-sm mb-2 group-hover:text-cyan-400 transition-colors truncate">
                {repo.name}
              </h3>
              <p className="text-slate-400 text-xs leading-relaxed mb-4">{repo.desc}</p>
              <div className="flex items-center justify-between text-xs text-slate-500">
                <span className={`bg-gradient-to-r ${repo.color} bg-clip-text text-transparent font-semibold`}>
                  {repo.lang}
                </span>
                <div className="flex items-center gap-3">
                  <span className="flex items-center gap-1"><Star size={11} /> {repo.stars}</span>
                  <span className="flex items-center gap-1"><GitFork size={11} /> {repo.forks}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
